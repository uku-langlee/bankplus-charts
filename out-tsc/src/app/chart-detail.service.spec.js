"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var chart_detail_service_1 = require("./chart-detail.service");
describe('ChartDetailService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [chart_detail_service_1.ChartDetailService]
        });
    });
    it('should be created', testing_1.inject([chart_detail_service_1.ChartDetailService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=chart-detail.service.spec.js.map