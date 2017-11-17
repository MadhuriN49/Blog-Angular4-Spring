"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nav_service_1 = require("../nav/nav.service");
var AddMoreComponent = (function () {
    function AddMoreComponent(navService) {
        this.navService = navService;
        this.newObj = {};
        this.addMoreObjs = [];
    }
    ;
    AddMoreComponent.prototype.ngOnInit = function () {
        this.navService.show();
    };
    AddMoreComponent.prototype.addMore = function (newObj) {
        console.log(this.newObj);
        this.newObj.datePosted = new Date().getDate() + " / " + new Date().getMonth() + " / " + new Date().getFullYear();
        this.addMoreObjs.push(this.newObj);
        localStorage.setItem("addMore", JSON.stringify(this.addMoreObjs));
        // sessionStorage.setItem("addMore", JSON.stringify(this.addMoreObjs));
    };
    return AddMoreComponent;
}());
AddMoreComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "AddMoreService",
        templateUrl: "./addMore.html"
    }),
    __metadata("design:paramtypes", [nav_service_1.NavService])
], AddMoreComponent);
exports.AddMoreComponent = AddMoreComponent;
//# sourceMappingURL=addMore.component.js.map