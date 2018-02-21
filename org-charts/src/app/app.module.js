"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var ng2_google_charts_1 = require("ng2-google-charts");
var org_chart_component_1 = require("./org-chart/org-chart.component");
var chart_detail_service_1 = require("./chart-detail.service");
var efficiency_ratio_component_1 = require("./efficiency-ratio/efficiency-ratio.component");
var er_detail_component_1 = require("./er-detail/er-detail.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, ng2_google_charts_1.Ng2GoogleChartsModule],
            declarations: [app_component_1.AppComponent, org_chart_component_1.OrgChartComponent, efficiency_ratio_component_1.EfficiencyRatioComponent, er_detail_component_1.ErDetailComponent],
            providers: [chart_detail_service_1.ChartDetailService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
