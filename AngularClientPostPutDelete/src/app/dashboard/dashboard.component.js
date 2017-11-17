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
var dashboard_service_1 = require("./dashboard.service");
var nav_service_1 = require("../nav/nav.service");
var DashboardComponent = (function () {
    function DashboardComponent(dashboardService, navService) {
        this.dashboardService = dashboardService;
        this.navService = navService;
    }
    ;
    DashboardComponent.prototype.ngOnInit = function () {
        this.navService.show();
        this.getContent();
    };
    DashboardComponent.prototype.getContent = function () {
        this.dashboardContents = this.dashboardService.getDashboardContentService();
        // localStorage.setItem("dashboardContents",this.dashboardContents );
        // var newItems = JSON.parse(sessionStorage.getItem("addMore"));
        var newItems = JSON.parse(localStorage.getItem("addMore"));
        for (var _i = 0, newItems_1 = newItems; _i < newItems_1.length; _i++) {
            var newItem = newItems_1[_i];
            this.dashboardContents.push(newItem);
        }
        var addedData = this.dashboardContents;
        //  sessionStorage.setItem("addedData", JSON.stringify(addedData));
        // this.dashboardContents.push(JSON.parse(sessionStorage.getItem("addMore")));
    };
    DashboardComponent.prototype.delete = function (index) {
        this.dashboardContents.splice(index, 1);
    };
    DashboardComponent.prototype.addToDashboard = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "DashboardService",
        templateUrl: "./dashboard.html"
    }),
    __metadata("design:paramtypes", [dashboard_service_1.DashboardService,
        nav_service_1.NavService])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map