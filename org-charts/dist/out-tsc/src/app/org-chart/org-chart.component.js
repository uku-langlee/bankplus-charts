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
var core_2 = require("@angular/core");
var chart_detail_service_1 = require("../chart-detail.service");
var OrgChartComponent = (function () {
    function OrgChartComponent(chartDetailService) {
        this.chartDetailService = chartDetailService;
        this.chartDetailService = chartDetailService;
    }
    OrgChartComponent.prototype.ngOnInit = function () {
        this.orgChartData = this.chartDetailService.getOrgChart1();
        this.topChart = this.chartDetailService.changeTopChart();
        this.topChart = true;
        console.log(this.orgChartData);
    };
    OrgChartComponent.prototype.getTopChart = function () {
        return this.topChart;
    };
    OrgChartComponent.prototype.ready = function (event) {
        console.log(event.message);
    };
    OrgChartComponent.prototype.error = function (event) {
        console.error(event);
    };
    OrgChartComponent.prototype.select = function (event) {
        this.selectEvent = event;
        if (event.row === 1) {
            console.log(event.selectedRowValues);
            this.chartDetailService.changeTopChart();
        }
    };
    __decorate([
        core_2.ViewChild('cchart'),
        __metadata("design:type", Object)
    ], OrgChartComponent.prototype, "cchart", void 0);
    OrgChartComponent = __decorate([
        core_1.Component({
            selector: 'app-org-chart',
            templateUrl: './org-chart.component.html',
            styleUrls: ['./org-chart.component.css']
        }),
        __metadata("design:paramtypes", [chart_detail_service_1.ChartDetailService])
    ], OrgChartComponent);
    return OrgChartComponent;
}());
exports.OrgChartComponent = OrgChartComponent;
//# sourceMappingURL=org-chart.component.js.map