"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ChartDetailService = (function () {
    function ChartDetailService() {
        this.topChart = false;
        this.topTitle = "\n  <div class=\"topTitle\">\n    <h1> Bankplus</h1>\n    <br>\n    <h3>Corporate Goals</h3>\n  </div>";
        this.roa = { v: 'roaData', f: this.getRoaData() };
        this.er = { v: 'erData', f: this.getErData() };
        this.pre = { v: 'preData', f: this.getPreData() };
        this.roe = { v: 'roeData', f: this.getRoeData() };
        this.erTitle = "\n  <div class=\"topTitle\">\n    <h1> Bankplus</h1>\n    <br>\n    <h2> Dollar Amount</h2>\n    <br>\n    <h3>Noninterest expense / (Interest income - interest expense + noninterest income)  </h3>\n  </div>";
        this.intExpense = { v: 'intExp', f: this.getIntExpense() };
        this.nonIntExpense = { v: 'nonIntExp', f: this.getNonIntExpense() };
        this.intIncome = { v: 'intInc', f: this.getIntIncome() };
        this.nonIntIncome = { v: 'nonIntInc', f: this.getNonIntIncome() };
        this.salariesBenefits = { v: 'SalBen', f: this.getSalariesBenefits() };
        this.occupancy = { v: 'occupancy', f: this.getOccuppancy() };
        this.dataProcessing = { v: 'dataProc', f: this.getDataProcessing() };
        this.promAdvert = { v: 'promAdvert', f: this.getPromAdvert() };
        this.fdicIns = { v: 'fdicIns', f: this.getFdicIns() };
        this.atmSecOth = { v: 'atmSecOth', f: this.getAtmSecurOth() };
        this.intOnLoans = { v: 'intOnLoans', f: this.getIntOnLoans() };
        this.feesOnLoans = { v: 'feesOnLoans', f: this.getFeesOnLoans() };
        this.investIncome = { v: 'investIncome', f: this.getInvestmentIncome() };
        this.taxBenExempt = { v: 'taxBenExempt', f: this.getTaxBenExempt() };
        this.loanYield = { v: 'loanYield', f: this.getLoanYield() };
        this.loanVolume = { v: 'LoanVolume', f: this.getLoanVolume() };
        this.invSecurYield = { v: 'invSecurYield', f: this.getInvSecurYield() };
        this.checkDeposits = { v: 'checkDeposits', f: this.getCheckingDeposits() };
        this.certsOfDeps = { v: 'certsOfDeps', f: this.getCertOfDeposits() };
        this.saveMonMarDeps = { v: 'saveMonMarDeps', f: this.getSaveMoneyMarkDep() };
        this.otherBorFunds = { v: 'otherBorFunds', f: this.getOthBorrowedFunds() };
        this.servChargeOnDeps = { v: 'ServChargeOnDeps', f: this.getServiceChargOnDep() };
        this.wealthManage = { v: 'wealthManage', f: this.getWealthManage() };
        this.checkcardOther = { v: 'checkcardOther', f: this.getCheckcardOther() };
        this.oreIncome = { v: 'oreIncome', f: this.getOREIncome() };
    }
    ChartDetailService.prototype.getOrgChart1 = function () {
        this.orgChart1 = {
            chartType: 'OrgChart',
            dataTable: [
                ['title', this.topTitle, ''],
                [this.roa, this.topTitle, ''],
                [this.er, this.topTitle, 'Clcik Here for Details'],
                [this.pre, this.topTitle, ''],
                [this.roe, this.topTitle, '']
            ],
            options: {
                title: 'Corporate Goals',
                allowHtml: true,
                allowCollapse: true,
                nodeClass: 'topChart'
            },
            formatters: [
                {
                    columns: [1, 2],
                    type: 'NumberFormat',
                    options: {
                        prefix: '&euro;', negativeColor: '#FF0000', negativeParens: true
                    }
                }
            ],
        };
        return this.orgChart1;
    };
    ChartDetailService.prototype.getOrgChart2 = function () {
        this.orgChart2 = {
            chartType: 'OrgChart',
            dataTable: [
                ['title', this.erTitle, ''],
                [this.nonIntExpense, this.erTitle, ''],
                [this.intIncome, this.erTitle, ''],
                [this.intExpense, this.erTitle, ''],
                [this.nonIntIncome, this.erTitle, ''],
                [this.salariesBenefits, this.nonIntExpense, ''],
                [this.occupancy, this.salariesBenefits, ''],
                [this.dataProcessing, this.occupancy, ''],
                [this.promAdvert, this.dataProcessing, ''],
                [this.fdicIns, this.promAdvert, ''],
                [this.atmSecOth, this.fdicIns, ''],
                [this.intOnLoans, this.intIncome, ''],
                [this.feesOnLoans, this.intOnLoans, ''],
                [this.investIncome, this.feesOnLoans, ''],
                [this.taxBenExempt, this.investIncome, ''],
                [this.loanYield, this.taxBenExempt, ''],
                [this.loanVolume, this.loanYield, ''],
                [this.invSecurYield, this.loanVolume, ''],
                [this.checkDeposits, this.intExpense, ''],
                [this.certsOfDeps, this.checkDeposits, ''],
                [this.saveMonMarDeps, this.certsOfDeps, ''],
                [this.otherBorFunds, this.saveMonMarDeps, ''],
                [this.servChargeOnDeps, this.nonIntIncome, ''],
                [this.wealthManage, this.servChargeOnDeps, ''],
                [this.checkcardOther, this.wealthManage, ''],
                [this.oreIncome, this.checkcardOther, ''],
            ],
            options: {
                title: 'Efficiency Ratios',
                allowHtml: true,
                allowCollapse: true,
                nodeClass: 'topChart'
            },
            formatters: [
                {
                    columns: [1, 2],
                    type: 'NumberFormat',
                    options: {
                        prefix: '&euro;', negativeColor: '#FF0000', negativeParens: true
                    }
                }
            ],
        };
        return this.orgChart2;
    };
    ChartDetailService.prototype.getTopChart = function () {
        return this.topChart;
    };
    ChartDetailService.prototype.changeTopChart = function () {
        this.topChart = !this.topChart;
        console.log(this.topChart);
        return this.topChart;
    };
    ChartDetailService.prototype.getRoaData = function () {
        var data;
        var dbRoa = 1.04;
        var dataColor;
        var roaDataType = "%";
        if (dbRoa > 2) {
            dataColor = "red";
        }
        else {
            dataColor = "green";
        }
        data = "\n  <div class=\"topRoa\">\n    <div class=\"roaTitle\">\n      <h3>ROA</h3>\n    </div>\n    <br>\n    <div style=\"background:" + dataColor + ";box-shadow: 1px 1px 1px grey;\">\n      <h2>" + dbRoa + roaDataType + "</h2>\n    </div>\n  </div>  \n  ";
        return data;
    };
    ChartDetailService.prototype.getErData = function () {
        var data;
        var dbEr = 65.75;
        var erMax = 75;
        var dataColor;
        var erDataType = "%";
        if (dbEr < erMax) {
            dataColor = "red";
        }
        else {
            dataColor = "green";
        }
        data = "\n  <div class=\"topEr\">\n    <div class=\"erTitle\">\n      <h3>Efficiency Ratio</h3>\n    </div>\n    <br>\n    <div style=\"background:" + dataColor + ";box-shadow: 1px 1px 1px grey;\">\n      <h2>" + dbEr + erDataType + "</h2>\n    </div>\n  </div>  \n  ";
        return data;
    };
    ChartDetailService.prototype.getPreData = function () {
        var data;
        var dbPre = 47625;
        var preMax = 1000000;
        var dataColor;
        var preDataType = "$";
        if (dbPre > preMax) {
            dataColor = "red";
        }
        else {
            dataColor = "green";
        }
        data = "\n  <div class=\"topEr\">\n    <div class=\"erTitle\">\n      <h4>Pre-Tax, Pre-Provision, Pre-ORE Writedowns & Losses Operating Income report</h4>\n    </div>\n    <br>\n    <div style=\"box-shadow: 1px 1px 1px grey;\">\n      <h2>" + preDataType + dbPre + "</h2>\n    </div>\n    <div>\n      link YTD\n    </div>\n  </div>  \n  ";
        return data;
    };
    ChartDetailService.prototype.getRoeData = function () {
        var data;
        var dbRoe = 10.99;
        var dataColor;
        var roeDataType = "%";
        if (dbRoe < 10) {
            dataColor = "red";
        }
        else {
            dataColor = "green";
        }
        data = "\n  <div class=\"topRoa\">\n    <div class=\"roaTitle\">\n      <h3>ROA</h3>\n    </div>\n    <br>\n    <div style=\"background:" + dataColor + ";box-shadow: 1px 1px 1px grey;\">\n      <h2>" + dbRoe + roeDataType + "</h2>\n    </div>\n  </div>  \n  ";
        return data;
    };
    ChartDetailService.prototype.getIntExpense = function () {
        var data;
        var dbIntExp = 8547;
        var dataType = "$";
        data = "\n   <table style=\"width:100%;height:100%;\">\n   <td> Interest Expense </td>\n   <td>" + dataType + dbIntExp + "</td>\n   </table>\n  ";
        return data;
    };
    ChartDetailService.prototype.getNonIntExpense = function () {
        var data;
        var dbNonIntExp = 94162;
        var dataType = "$";
        data = "\n  <table style=\"width:100%;height:100%;background-color:grey;\">\n  <td> Non Interest Expense </td>\n  <td>" + dataType + dbNonIntExp + "</td>\n  </table>\n ";
        return data;
    };
    ChartDetailService.prototype.getIntIncome = function () {
        var data;
        var dbIntInc = 97107;
        var dataType = "$";
        data = "\n  <table style=\"width:100%;height:100%;\">\n  <td> Interest Income </td>\n  <td>" + dataType + dbIntInc + "</td>\n  </table>\n ";
        return data;
    };
    ChartDetailService.prototype.getNonIntIncome = function () {
        var data;
        var dbNonIntExp = 50636;
        var dataType = "$";
        data = "\n  <table style=\"width:100%;height:100%;padding:0;\">\n  <td> Non Interest Income </td>\n  <td>" + dataType + dbNonIntExp + "</td>\n  </table>\n ";
        return data;
    };
    ChartDetailService.prototype.getSalariesBenefits = function () {
        var data;
        var dbSalBen = 53486;
        var dataType = "$";
        data = "\n  <table style=\"width:100%;height:100%;padding:0;\">\n  <td> Salaries & Benefits </td>\n  <td>" + dataType + dbSalBen + "</td>\n  </table>\n ";
        return data;
    };
    ChartDetailService.prototype.getOccuppancy = function () {
        var data;
        var dbOccupancy = 12545;
        var dataType = "$";
        data = "\n  <table style=\"width:100%;height:100%;padding:0;\">\n  <td> Occupancy </td>\n  <td>" + dataType + dbOccupancy + "</td>\n  </table>\n ";
        return data;
    };
    ChartDetailService.prototype.getDataProcessing = function () {
        var data;
        var dbDataProc = 8406;
        var dataType = "$";
        data = "\n  <table style=\"width:100%;height:100%;padding:0;\">\n  <td> Data Processing </td>\n  <td>" + dataType + dbDataProc + "</td>\n  </table>\n ";
        return data;
    };
    ChartDetailService.prototype.getPromAdvert = function () {
        var data;
        var dbPromAdvert = 2832;
        var dataType = "$";
        data = "\n  <table style=\"width:100%;height:100%;padding:0;\">\n  <td> Promotional & Advertising </td>\n  <td>" + dataType + dbPromAdvert + "</td>\n  </table>\n ";
        return data;
    };
    ChartDetailService.prototype.getFdicIns = function () {
        var data;
        var dbFdicIns = 1408;
        var dataType = "$";
        data = "\n  <table style=\"width:100%;height:100%;padding:0;\">\n  <td> FDIC Insurance </td>\n  <td>" + dataType + dbFdicIns + "</td>\n  </table>\n ";
        return data;
    };
    ChartDetailService.prototype.getAtmSecurOth = function () {
        var data;
        var dbAtmSecurOth = 15485;
        var dataType = "$";
        data = "\n  <table style=\"width:100%;height:100%;padding:0;\">\n  <td> ATM, Security and Other </td>\n  <td>" + dataType + dbAtmSecurOth + "</td>\n  </table>\n ";
        return data;
    };
    ChartDetailService.prototype.getIntOnLoans = function () {
        var data;
        var dbIntOnLoans = 79925;
        var dataType = "$";
        data = "\n  <table style=\"width:100%;height:100%;padding:0;\">\n  <td> Interest On Loans </td>\n  <td>" + dataType + dbIntOnLoans + "</td>\n  </table>\n ";
        return data;
    };
    ChartDetailService.prototype.getFeesOnLoans = function () {
        var data;
        var dbFeesOnLoans = 4509;
        var dataType = "$";
        data = "\n  <table style=\"width:100%;height:100%;padding:0;\">\n  <td> Fees On Loans </td>\n  <td>" + dataType + dbFeesOnLoans + "</td>\n  </table>\n ";
        return data;
    };
    ChartDetailService.prototype.getInvestmentIncome = function () {
        var data;
        var dbInvIncome = 10922;
        var dataType = "$";
        data = "\n  <table style=\"width:100%;height:100%;padding:0;\">\n  <td> Investment Income</td>\n  <td>" + dataType + dbInvIncome + "</td>\n  </table>\n ";
        return data;
    };
    ChartDetailService.prototype.getTaxBenExempt = function () {
        var data;
        var dbTaxBenExempt = 1751;
        var dataType = "$";
        data = "\n  <table style=\"width:100%;height:100%;padding:0;\">\n  <td> Tax Benefit for Tax-exempt Income </td>\n  <td>" + dataType + dbTaxBenExempt + "</td>\n  </table>\n ";
        return data;
    };
    ChartDetailService.prototype.getLoanYield = function () {
        var data;
        var dbLoanYield = 4.96;
        var dataType = "%";
        data = "\n  <table style=\"width:100%;height:100%;padding:0;\">\n  <td> Loan Yield </td>\n  <td>" + dbLoanYield + dataType + "</td>\n  </table>\n ";
        return data;
    };
    ChartDetailService.prototype.getLoanVolume = function () {
        var data;
        var dbLoanVolume = 1921777;
        var dataType = "$";
        data = "\n  <table style=\"width:100%;height:100%;padding:0;\">\n  <td> Loan Volume </td>\n  <td>" + dataType + dbLoanVolume + "</td>\n  </table>\n ";
        return data;
    };
    ChartDetailService.prototype.getInvSecurYield = function () {
        var data;
        var dbInvSecurYield = 1.95;
        var dataType = "%";
        data = "\n  <table style=\"width:100%;height:100%;padding:0;\">\n  <td> Investment Security Yield </td>\n  <td>" + dbInvSecurYield + dataType + "</td>\n  </table>\n ";
        return data;
    };
    ChartDetailService.prototype.getCheckingDeposits = function () {
        var data;
        var dbCheckingDep = 1142;
        var dataType = "$";
        data = "\n  <table style=\"width:100%;height:100%;padding:0;\">\n  <td> Checking Deposits </td>\n  <td>" + dataType + dbCheckingDep + "</td>\n  </table>\n ";
        return data;
    };
    ChartDetailService.prototype.getCertOfDeposits = function () {
        var data;
        var dbCertOfDep = 1848;
        var dataType = "$";
        data = "\n  <table style=\"width:100%;height:100%;padding:0;\">\n  <td> Certificate of Deposits </td>\n  <td>" + dataType + dbCertOfDep + "</td>\n  </table>\n ";
        return data;
    };
    ChartDetailService.prototype.getSaveMoneyMarkDep = function () {
        var data;
        var dbSaveMonMarDep = 389;
        var dataType = "$";
        data = "\n  <table style=\"width:100%;height:100%;padding:0;\">\n  <td> Savings and Money Market Deposits </td>\n  <td>" + dataType + dbSaveMonMarDep + "</td>\n  </table>\n ";
        return data;
    };
    ChartDetailService.prototype.getOthBorrowedFunds = function () {
        var data;
        var dbOthBorFunds = 5168;
        var dataType = "$";
        data = "\n  <table style=\"width:100%;height:100%;padding:0;\">\n  <td> Other Borrowed Funds </td>\n  <td>" + dataType + dbOthBorFunds + "</td>\n  </table>\n ";
        return data;
    };
    ChartDetailService.prototype.getServiceChargOnDep = function () {
        var data;
        var dbServChargeOnDep = 25783;
        var dataType = "$";
        data = "\n  <table style=\"width:100%;height:100%;padding:0;\">\n  <td> Service Charge On Deposits </td>\n  <td>" + dataType + dbServChargeOnDep + "</td>\n  </table>\n ";
        return data;
    };
    ChartDetailService.prototype.getWealthManage = function () {
        var data;
        var dbWealthManage = 9047;
        var dataType = "$";
        data = "\n  <table style=\"width:100%;height:100%;padding:0;\">\n  <td> Wealth Management Revenue and Other Fee Income </td>\n  <td>" + dataType + dbWealthManage + "</td>\n  </table>\n ";
        return data;
    };
    ChartDetailService.prototype.getCheckcardOther = function () {
        var data;
        var dbCheckcardOth = 15049;
        var dataType = "$";
        data = "\n  <table style=\"width:100%;height:100%;padding:0;\">\n  <td> Checkcard, ATM, Mortgage Center and Other </td>\n  <td>" + dataType + dbCheckcardOth + "</td>\n  </table>\n ";
        return data;
    };
    ChartDetailService.prototype.getOREIncome = function () {
        var data;
        var dbOREIncome = 757;
        var dataType = "$";
        data = "\n  <table style=\"width:100%;height:100%;padding:0;\">\n  <td> ORE Income</td>\n  <td>" + dataType + dbOREIncome + "</td>\n  </table>\n ";
        return data;
    };
    ChartDetailService = __decorate([
        core_1.Injectable()
    ], ChartDetailService);
    return ChartDetailService;
}());
exports.ChartDetailService = ChartDetailService;
//# sourceMappingURL=chart-detail.service.js.map