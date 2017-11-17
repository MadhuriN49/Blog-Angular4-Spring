"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DashboardService = (function () {
    function DashboardService() {
    }
    DashboardService.prototype.getDashboardContentService = function () {
        return [{
                title: "Component1",
                content: "Dummy Content",
                authorName: "Carl",
                datePosted: new Date().getDate() + " / " + new Date().getMonth() + " / " + new Date().getFullYear(),
                imgPath: "app/shared/images/carl.jpeg"
            },
            {
                title: "Component2",
                content: "Dummy Content Cookies are data, stored in small text files",
                authorName: "Andria",
                datePosted: new Date().getDate() + " / " + new Date().getMonth() + " / " + new Date().getFullYear(),
                imgPath: "app/shared/images/andria.jpeg"
            },
            {
                title: "Component3",
                content: "Dummy Content",
                authorName: "Max",
                datePosted: new Date().getDate() + " / " + new Date().getMonth() + " / " + new Date().getFullYear(),
                imgPath: "app/shared/images/max.jpeg"
            },
        ];
    };
    return DashboardService;
}());
DashboardService = __decorate([
    core_1.Injectable()
], DashboardService);
exports.DashboardService = DashboardService;
//# sourceMappingURL=dashboard.service.js.map