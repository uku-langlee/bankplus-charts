import { Injectable } from '@angular/core';
import { ChartReadyEvent } from 'ng2-google-charts';
import { ChartErrorEvent } from 'ng2-google-charts';
import { ChartSelectEvent } from 'ng2-google-charts';
import { ChartMouseOverEvent, ChartMouseOutEvent } from 'ng2-google-charts';
import { OrgChartComponent } from './org-chart/org-chart.component';
import { EfficiencyRatioComponent } from './efficiency-ratio/efficiency-ratio.component';
import { iOrgChart } from './iorg-chart';

@Injectable()
export class ChartDetailService {
  public topChart: boolean = false;
  public orgChart1: iOrgChart;
  public orgChart2: iOrgChart;
  public topTitle: string = `
  <div class="topTitle">
    <h1> Bankplus</h1>
    <br>
    <h3>Corporate Goals</h3>
  </div>`;
  //first page table
  //DataColor = database color. String is injected in HTML
  //DataType = database data type (either $ or % usually). String is injected in HTML
  //db = The actual database value
  public dbRoa:number = 10.75;
  public roaDataColor: string;
  public roaDataType: string = "%"
  public dbEr: number = 65.75;
  public erDataColor: string;
  public erDataType: string = "%";
  public dbPre: number = 47625;
  public preMax = 1000000;
  public preDataColor: string;
  public preDataType: string = "$";
  public dbRoe: number = 10.99;
  public roeDataColor: string;
  public roeDataType: string = "%";
  //Actual Data Table rows for chart. v: is just a menaingless title. f: is the actual value.
  public roa = { v: 'roaData', f: this.getRoaData() }
  public er = { v: 'erData', f: this.getErData() }
  public pre = { v: 'preData', f: this.getPreData() }
  public roe = { v: 'roeData', f: this.getRoeData() }

  public erTitle: string = `
  <div class="topTitle">
    <h1> Bankplus</h1>
    <br>
    <h2> Dollar Amount</h2>
    <br>
    <h3>Noninterest expense / (Interest income - interest expense + noninterest income)  </h3>
  </div>`;
  public intExpense;
  public nonIntExpense;
  public intIncome;
  public nonIntIncome;
  public salariesBenefits;
  public occupancy;
  public dataProcessing;
  public promAdvert;
  public fdicIns;
  public atmSecOth;
  public intOnLoans;
  public feesOnLoans;
  public investIncome;
  public taxBenExempt;
  public loanYield;
  public loanVolume;
  public invSecurYield;
  public checkDeposits;
  public certsOfDeps;
  public saveMonMarDeps;
  public otherBorFunds;
  public servChargeOnDeps;
  public wealthManage;
  public checkcardOther;
  public oreIncome;

  public dbIntExp: number = 8547;
  public intExpDataType: string = "$";
  public dbNonIntExp: number = 94162;
  public nonIntExpDataType: string = "$";
  public dbIntInc: number = 97107;
  public intIncDataType: string = "$";
  public dbNonIntInc: number = 50636;
  public nonIntIncDataType: string = "$";
  public dbSalBen: number = 53486;
  public salBenDataType: string = "$";
  public dbOccupancy: number = 12545;
  public occupancyDataType: string = "$";
  public dbDataProc: number = 8406;
  public dataProcDataType: string = "$";
  public dbPromAdvert: number = 2832;
  public promAdvertDataType: string = "$";
  public dbFdicIns: number = 1408;
  public fdicInsDataType: string = "$";
  public dbAtmSecurOth: number = 15485;
  public atmSecurOthDataType: string = "$";
  public dbIntOnLoans: number = 79925;
  public intOnLoansDataType: string = "$";
  public dbFeesOnLoans: number = 4509;
  public feesOnLoansDataType: string = "$";
  public dbInvIncome: number = 10922;
  public invIncomeDataType: string = "$";
  public dbTaxBenExempt: number = 1751;
  public taxBenExemptDataType: string = "$";
  public dbLoanYield: number = 4.96;
  public loanYieldDataType: string = "%";
  public dbLoanVolume: number = 1921777;
  public loanVolumeDataType: string = "$";
  public dbInvSecurYield: number = 1.95;
  public invSecurYieldDataType: string = "%";
  public dbCheckingDep: number = 1142;
  public checkingDepDataType: string = "$";
  public dbCertOfDep: number = 1848;
  public certOfDepDataType: string = "$";
  public dbSaveMonMarDep: number = 389;
  public saveMonMarDepDataType: string = "$";
  public dbOthBorFunds: number = 5168;
  public othBorFundsDataType: string = "$";
  public dbServChargeOnDep: number = 25783;
  public servChargeOnDepDataType: string = "$";
  public dbWealthManage: number = 9047;
  public wealthManageDataType: string = "$";
  public dbOREIncome: number = 757;
  public oreIncomeDataType: string = "$";
  public dbCheckcardOth: number = 15049;
  public checkcardOthDataType: string = "$";

  constructor(){
    this.oreIncome = { v: 'oreIncome', f: this.getOREIncome() };
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
  }

  public getOrgChart1(): iOrgChart {
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
      ]
    }
    return this.orgChart1;
  }
  public getOrgChart2(): iOrgChart {
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
    }
    return this.orgChart2;
  }

  public getTopChart(): boolean {

    return this.topChart;
  }
  public changeTopChart(): boolean {
    this.topChart = !this.topChart;
    console.log(this.topChart);
    return this.topChart;
  }
  public getRoaData() {
    let data: string;  

    if (this.dbRoa > 2) {
      this.roaDataColor = "red";
    }
    else {
      this.roaDataColor = "green";
    }

    data = `
  <div class="topRoa">
    <div class="roaTitle">
      <h3>ROA</h3>
    </div>
    <br>
    <div style="background:`+ this.roaDataColor + `;box-shadow: 1px 1px 1px grey;">
      <h2>`+ this.dbRoa + this.roaDataType + `</h2>
    </div>
  </div>  
  `

    return data;
  }
  public getErData() {
    let data: string;
    let erMax = 75;

    if (this.dbEr < erMax) {
      this.erDataColor = "red";
    }
    else {
      this.erDataColor = "green";
    }

    data = `
  <div class="topEr">
    <div class="erTitle">
      <h3>Efficiency Ratio</h3>
    </div>
    <br>
    <div style="background:`+ this.erDataColor + `;box-shadow: 1px 1px 1px grey;">
      <h2>`+ this.dbEr + this.erDataType + `</h2>
    </div>
  </div>  
  `

    return data;
  }
  public getPreData() {
    let data: string;
    let preMax = 1000000;

    if (this.dbPre > preMax) {
      this.preDataColor = "red";
    }
    else {
      this.preDataColor = "green";
    }

    data = `
  <div class="topEr">
    <div class="erTitle">
      <h4>Pre-Tax, Pre-Provision, Pre-ORE Writedowns & Losses Operating Income report</h4>
    </div>
    <br>
    <div style="box-shadow: 1px 1px 1px grey;">
      <h2>`+ this.preDataType + this.dbPre + `</h2>
    </div>
    <div>
      link YTD
    </div>
  </div>  
  `

    return data;
  }
  public getRoeData() {
    let data: string;
   

    if (this.dbRoe < 10) {
      this.roeDataColor = "red";
    }
    else {
      this.roeDataColor = "green";
    }

    data = `
  <div class="topRoa">
    <div class="roaTitle">
      <h3>ROA</h3>
    </div>
    <br>
    <div style="background:`+ this.roeDataColor + `;box-shadow: 1px 1px 1px grey;">
      <h2>`+ this.dbRoe + this.roeDataType + `</h2>
    </div>
  </div>  
  `

    return data;
  }

  public getIntExpense() {
    let data: string;
    data = `
   <table style="width:100%;height:100%;">
   <td> Interest Expense </td>
   <td>`+ this.intExpDataType + this.dbIntExp + `</td>
   </table>
  `
    return data;
  }
  public getNonIntExpense() {
    let data: string;
    data = `
  <table style="width:100%;height:100%;">
  <td> Non Interest Expense </td>
  <td>`+ this.nonIntExpDataType + this.dbNonIntExp + `</td>
  </table>
 `
    return data;
  }
  public getIntIncome() {
    let data: string;
    data = `
  <table style="width:100%;height:100%;">
  <td> Interest Income </td>
  <td>`+ this.intIncDataType + this.dbIntInc + `</td>
  </table>
 `
    return data;
  }
  public getNonIntIncome() {
    let data: string;

    data = `
  <table style="width:100%;height:100%;padding:0;">
  <td> Non Interest Income </td>
  <td>`+ this.nonIntIncDataType + this.dbNonIntInc + `</td>
  </table>
 `
    return data;
  }
  public getSalariesBenefits() {
    let data: string;

    data = `
  <table style="width:100%;height:100%;padding:0;">
  <td> Salaries & Benefits </td>
  <td>`+ this.salBenDataType + this.dbSalBen + `</td>
  </table>
 `
    return data;
  }
  public getOccuppancy() {
    let data: string;

    data = `
  <table style="width:100%;height:100%;padding:0;">
  <td> Occupancy </td>
  <td>`+ this.occupancyDataType + this.dbOccupancy + `</td>
  </table>
 `
    return data;
  }
  public getDataProcessing() {
    let data: string;

    data = `
  <table style="width:100%;height:100%;padding:0;">
  <td> Data Processing </td>
  <td>`+ this.dataProcDataType + this.dbDataProc + `</td>
  </table>
 `
    return data;
  }
  public getPromAdvert() {
    let data: string;

    data = `
  <table style="width:100%;height:100%;padding:0;">
  <td> Promotional & Advertising </td>
  <td>`+ this.promAdvertDataType + this.dbPromAdvert + `</td>
  </table>
 `
    return data;
  }
  public getFdicIns() {
    let data: string;
    data = `
  <table style="width:100%;height:100%;padding:0;">
  <td> FDIC Insurance </td>
  <td>`+ this.fdicInsDataType + this.dbFdicIns + `</td>
  </table>
 `
    return data;
  }
  public getAtmSecurOth() {
    let data: string;

    data = `
  <table style="width:100%;height:100%;padding:0;">
  <td> ATM, Security and Other </td>
  <td>`+ this.atmSecurOthDataType + this.dbAtmSecurOth + `</td>
  </table>
 `
    return data;
  }
  public getIntOnLoans() {
    let data: string;

    data = `
  <table style="width:100%;height:100%;padding:0;">
  <td> Interest On Loans </td>
  <td>`+ this.intOnLoansDataType + this.dbIntOnLoans + `</td>
  </table>
 `
    return data;
  }
  public getFeesOnLoans() {
    let data: string;

    data = `
  <table style="width:100%;height:100%;padding:0;">
  <td> Fees On Loans </td>
  <td>`+ this.feesOnLoansDataType + this.dbFeesOnLoans + `</td>
  </table>
 `
    return data;
  }
  public getInvestmentIncome() {
    let data: string;

    data = `
  <table style="width:100%;height:100%;padding:0;">
  <td> Investment Income</td>
  <td>`+ this.invIncomeDataType + this.dbInvIncome + `</td>
  </table>
 `
    return data;
  }
  public getTaxBenExempt() {
    let data: string;

    data = `
  <table style="width:100%;height:100%;padding:0;">
  <td> Tax Benefit for Tax-exempt Income </td>
  <td>`+ this.taxBenExemptDataType + this.dbTaxBenExempt + `</td>
  </table>
 `
    return data;
  }
  public getLoanYield() {
    let data: string;

    data = `
  <table style="width:100%;height:100%;padding:0;">
  <td> Loan Yield </td>
  <td>`+ this.dbLoanYield + this.loanYieldDataType + `</td>
  </table>
 `
    return data;
  }
  public getLoanVolume() {
    let data: string;

    data = `
  <table style="width:100%;height:100%;padding:0;">
  <td> Loan Volume </td>
  <td>`+ this.loanVolumeDataType + this.dbLoanVolume + `</td>
  </table>
 `
    return data;
  }
  public getInvSecurYield() {
    let data: string;

    data = `
  <table style="width:100%;height:100%;padding:0;">
  <td> Investment Security Yield </td>
  <td>`+ this.dbInvSecurYield + this.invSecurYieldDataType + `</td>
  </table>
 `
    return data;
  }
  public getCheckingDeposits() {
    let data: string;

    data = `
  <table style="width:100%;height:100%;padding:0;">
  <td> Checking Deposits </td>
  <td>`+ this.checkingDepDataType + this.dbCheckingDep + `</td>
  </table>
 `
    return data;
  }
  public getCertOfDeposits() {
    let data: string;

    data = `
  <table style="width:100%;height:100%;padding:0;">
  <td> Certificate of Deposits </td>
  <td>`+ this.certOfDepDataType + this.dbCertOfDep + `</td>
  </table>
 `
    return data;
  }
  public getSaveMoneyMarkDep() {
    let data: string;

    data = `
  <table style="width:100%;height:100%;padding:0;">
  <td> Savings and Money Market Deposits </td>
  <td>`+ this.saveMonMarDepDataType + this.dbSaveMonMarDep + `</td>
  </table>
 `
    return data;
  }
  public getOthBorrowedFunds() {
    let data: string;

    data = `
  <table style="width:100%;height:100%;padding:0;">
  <td> Other Borrowed Funds </td>
  <td>`+ this.othBorFundsDataType + this.dbOthBorFunds + `</td>
  </table>
 `
    return data;
  }
  public getServiceChargOnDep() {
    let data: string;

    data = `
  <table style="width:100%;height:100%;padding:0;">
  <td> Service Charge On Deposits </td>
  <td>`+ this.servChargeOnDepDataType + this.dbServChargeOnDep + `</td>
  </table>
 `
    return data;
  }
  public getWealthManage() {
    let data: string;

    data = `
  <table style="width:100%;height:100%;padding:0;">
  <td> Wealth Management Revenue and Other Fee Income </td>
  <td>`+ this.wealthManageDataType + this.dbWealthManage + `</td>
  </table>
 `
    return data;
  }
  public getCheckcardOther() {
    let data: string;
    
    data = `
  <table style="width:100%;height:100%;padding:0;">
  <td> Checkcard, ATM, Mortgage Center and Other </td>
  <td>`+ this.checkcardOthDataType + this.dbCheckcardOth + `</td>
  </table>
 `
    return data;
  }
  public getOREIncome() {
    let data: string;

    data = `
  <table style="width:100%;height:100%;padding:0;">
  <td> ORE Income</td>
  <td>`+ this.oreIncomeDataType + this.dbOREIncome + `</td>
  </table>
 `
    return data;
  }
}
