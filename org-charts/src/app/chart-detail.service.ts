import { Injectable } from '@angular/core';
import { ChartReadyEvent } from 'ng2-google-charts';
import { ChartErrorEvent } from 'ng2-google-charts';
import { ChartSelectEvent } from 'ng2-google-charts';
import { ChartMouseOverEvent, ChartMouseOutEvent } from 'ng2-google-charts';
import { OrgChartComponent } from './org-chart/org-chart.component';
import { EfficiencyRatioComponent } from './efficiency-ratio/efficiency-ratio.component';
import { ErDetailComponent } from './er-detail/er-detail.component';
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
  public roa = { v:'roaData', f: this.getRoaData()}
  public er = {v:'erData', f:this.getErData()}
  public pre = {v:'preData', f:this.getPreData()}
  public roe = {v:'roeData', f:this.getRoeData()}

  public erTitle: string = `
  <div class="topTitle">
    <h1> Bankplus</h1>
    <br>
    <h2> Dollar Amount</h2>
    <br>
    <h3>Noninterest expense / (Interest income - interest expense + noninterest income)  </h3>
  </div>`;
  public intExpense = {v:'intExp', f:this.getIntExpense()};
  public nonIntExpense = {v:'nonIntExp',f:this.getNonIntExpense()};
  public intIncome = {v:'intInc',f:this.getIntIncome()};
  public nonIntIncome = {v:'nonIntInc',f:this.getNonIntIncome()};
  public salariesBenefits= {v:'SalBen',f:this.getSalariesBenefits()};
  public occupancy = {v:'occupancy',f:this.getOccuppancy()};
  public dataProcessing = {v:'dataProc',f:this.getDataProcessing()};
  public promAdvert = {v:'promAdvert',f:this.getPromAdvert()};
  public fdicIns = {v:'fdicIns',f:this.getFdicIns()};
  public atmSecOth = {v:'atmSecOth',f:this.getAtmSecurOth()};
  public intOnLoans = {v:'intOnLoans',f:this.getIntOnLoans()};
  public feesOnLoans = {v:'feesOnLoans',f:this.getFeesOnLoans()};
  public investIncome = {v:'investIncome',f:this.getInvestmentIncome()};
  public taxBenExempt = {v:'taxBenExempt',f:this.getTaxBenExempt()};
  public loanYield = {v:'loanYield',f:this.getLoanYield()};
  public loanVolume = {v:'LoanVolume',f:this.getLoanVolume()};
  public invSecurYield = {v:'invSecurYield',f:this.getInvSecurYield()};
  public checkDeposits = {v:'checkDeposits',f:this.getCheckingDeposits()};
  public certsOfDeps = {v:'certsOfDeps',f:this.getCertOfDeposits()};
  public saveMonMarDeps = {v:'saveMonMarDeps',f:this.getSaveMoneyMarkDep()};
  public otherBorFunds = {v:'otherBorFunds',f:this.getOthBorrowedFunds()};
  public servChargeOnDeps = {v:'ServChargeOnDeps',f:this.getServiceChargOnDep()};
  public wealthManage = {v:'wealthManage',f:this.getWealthManage()};
  public checkcardOther = {v:'checkcardOther',f:this.getCheckcardOther()};
  public oreIncome = {v:'oreIncome',f:this.getOREIncome()};
  
 
  public getOrgChart1():iOrgChart{
  this.orgChart1 = {    
    chartType: 'OrgChart',
    dataTable: [
     ['title',this.topTitle,''],
     [this.roa,this.topTitle,''],
     [this.er,this.topTitle,'Clcik Here for Details'],
     [this.pre,this.topTitle,''],
     [this.roe,this.topTitle,'']
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
  }
  return this.orgChart1;
}
public getOrgChart2():iOrgChart{
  this.orgChart2 = {    
    chartType: 'OrgChart',
    dataTable: [
     ['title',this.erTitle,''],
     [this.nonIntExpense,this.erTitle,''],
     [this.intIncome,this.erTitle,''],
     [this.intExpense,this.erTitle,''],
     [this.nonIntIncome,this.erTitle,''],
     [this.salariesBenefits,this.nonIntExpense,''],
     [this.occupancy,this.salariesBenefits,''],
     [this.dataProcessing,this.occupancy,''],
     [this.promAdvert,this.dataProcessing,''],
     [this.fdicIns,this.promAdvert,''],
     [this.atmSecOth,this.fdicIns,''],
     [this.intOnLoans, this.intIncome, ''],
     [this.feesOnLoans,this.intOnLoans,''],
     [this.investIncome,this.feesOnLoans,''],
     [this.taxBenExempt,this.investIncome,''],
     [this.loanYield,this.taxBenExempt,''],
     [this.loanVolume,this.loanYield,''],
     [this.invSecurYield,this.loanVolume,''],
     [this.checkDeposits,this.intExpense,''],
     [this.certsOfDeps,this.checkDeposits,''],
     [this.saveMonMarDeps,this.certsOfDeps,''],
     [this.otherBorFunds,this.saveMonMarDeps,''],
     [this.servChargeOnDeps,this.nonIntIncome,''],
     [this.wealthManage,this.servChargeOnDeps,''],
     [this.checkcardOther,this.wealthManage,''],
     [this.oreIncome,this.checkcardOther,''],
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

public getTopChart():boolean{ 
  
  return this.topChart;
}
public changeTopChart(): boolean{
  this.topChart = !this.topChart;
  console.log(this.topChart);
  return this.topChart;
}
public getRoaData(){
  let data:string;
  let dbRoa: number = 1.04;
  let dataColor: string;
  let roaDataType: string = "%";
 
  if(dbRoa>2){
   dataColor = "red";
  }
  else{
    dataColor = "green";
  }
  
  data = `
  <div class="topRoa">
    <div class="roaTitle">
      <h3>ROA</h3>
    </div>
    <br>
    <div style="background:`+dataColor+`;box-shadow: 1px 1px 1px grey;">
      <h2>`+ dbRoa+roaDataType+`</h2>
    </div>
  </div>  
  `
 
   return data;
 }
 public getErData(){
  let data:string;
  let dbEr: number = 65.75;
  let erMax = 75;
  let dataColor: string;
  let erDataType: string = "%";
 
  if(dbEr<erMax){
   dataColor = "red";
  }
  else{
    dataColor = "green";
  }
  
  data =  `
  <div class="topEr">
    <div class="erTitle">
      <h3>Efficiency Ratio</h3>
    </div>
    <br>
    <div style="background:`+dataColor+`;box-shadow: 1px 1px 1px grey;">
      <h2>`+dbEr+erDataType+`</h2>
    </div>
  </div>  
  `
 
   return data;
 }
 public getPreData(){
  let data:string;
  let dbPre: number = 47625;
  let preMax = 1000000;
  let dataColor: string;
  let preDataType: string = "$";
 
  if(dbPre>preMax){
   dataColor = "red";
  }
  else{
    dataColor = "green";
  }
  
  data =  `
  <div class="topEr">
    <div class="erTitle">
      <h4>Pre-Tax, Pre-Provision, Pre-ORE Writedowns & Losses Operating Income report</h4>
    </div>
    <br>
    <div style="box-shadow: 1px 1px 1px grey;">
      <h2>`+preDataType+dbPre+`</h2>
    </div>
    <div>
      link YTD
    </div>
  </div>  
  `
 
   return data;
 }
 public getRoeData(){
  let data:string;
  let dbRoe: number = 10.99;
  let dataColor: string;
  let roeDataType: string = "%";
 
  if(dbRoe<10){
   dataColor = "red";
  }
  else{
    dataColor = "green";
  }
  
  data = `
  <div class="topRoa">
    <div class="roaTitle">
      <h3>ROA</h3>
    </div>
    <br>
    <div style="background:`+dataColor+`;box-shadow: 1px 1px 1px grey;">
      <h2>`+ dbRoe+roeDataType+`</h2>
    </div>
  </div>  
  `
 
   return data;
 }

 public getIntExpense(){
   let data: string;
   let dbIntExp: number = 8547;
   let dataType: string = "$";
   data = `
   <table style="width:100%;height:100%;">
   <td> Interest Expense </td>
   <td>`+dataType+dbIntExp+`</td>
   </table>
  `
  return data;
 }
public getNonIntExpense(){
  let data: string;
  let dbNonIntExp: number = 94162;
  let dataType: string = "$";
  data = `
  <table style="width:100%;height:100%;background-color:grey;">
  <td> Non Interest Expense </td>
  <td>`+dataType+dbNonIntExp+`</td>
  </table>
 `
 return data;
}
public getIntIncome(){
  let data: string;
  let dbIntInc: number = 97107;
  let dataType: string = "$";
  data = `
  <table style="width:100%;height:100%;">
  <td> Interest Income </td>
  <td>`+dataType+dbIntInc+`</td>
  </table>
 `
 return data;
}
public getNonIntIncome(){
  let data: string;
  let dbNonIntExp: number = 50636;
  let dataType: string = "$";
  data = `
  <table style="width:100%;height:100%;padding:0;">
  <td> Non Interest Income </td>
  <td>`+dataType+dbNonIntExp+`</td>
  </table>
 `
 return data;
}
public getSalariesBenefits(){
  let data: string;
  let dbSalBen: number = 53486;
  let dataType: string = "$";
  data = `
  <table style="width:100%;height:100%;padding:0;">
  <td> Salaries & Benefits </td>
  <td>`+dataType+dbSalBen+`</td>
  </table>
 `
 return data;
}
public getOccuppancy(){
  let data: string;
  let dbOccupancy: number = 12545;
  let dataType: string = "$";
  data = `
  <table style="width:100%;height:100%;padding:0;">
  <td> Occupancy </td>
  <td>`+dataType+dbOccupancy+`</td>
  </table>
 `
 return data;
}
public getDataProcessing(){
  let data: string;
  let dbDataProc: number = 8406;
  let dataType: string = "$";
  data = `
  <table style="width:100%;height:100%;padding:0;">
  <td> Data Processing </td>
  <td>`+dataType+dbDataProc+`</td>
  </table>
 `
 return data;
}
public getPromAdvert(){
  let data: string;
  let dbPromAdvert: number = 2832;
  let dataType: string = "$";
  data = `
  <table style="width:100%;height:100%;padding:0;">
  <td> Promotional & Advertising </td>
  <td>`+dataType+dbPromAdvert+`</td>
  </table>
 `
 return data;
}
public getFdicIns(){
  let data: string;
  let dbFdicIns: number = 1408;
  let dataType: string = "$";
  data = `
  <table style="width:100%;height:100%;padding:0;">
  <td> FDIC Insurance </td>
  <td>`+dataType+dbFdicIns+`</td>
  </table>
 `
 return data;
}
public getAtmSecurOth(){
  let data: string;
  let dbAtmSecurOth: number = 15485;
  let dataType: string = "$";
  data = `
  <table style="width:100%;height:100%;padding:0;">
  <td> ATM, Security and Other </td>
  <td>`+dataType+dbAtmSecurOth+`</td>
  </table>
 `
 return data;
}
public getIntOnLoans(){
  let data: string;
  let dbIntOnLoans: number = 79925;
  let dataType: string = "$";
  data = `
  <table style="width:100%;height:100%;padding:0;">
  <td> Interest On Loans </td>
  <td>`+dataType+dbIntOnLoans+`</td>
  </table>
 `
 return data;
}
public getFeesOnLoans(){
  let data: string;
  let dbFeesOnLoans: number = 4509;
  let dataType: string = "$";
  data = `
  <table style="width:100%;height:100%;padding:0;">
  <td> Fees On Loans </td>
  <td>`+dataType+dbFeesOnLoans+`</td>
  </table>
 `
 return data;
}
public getInvestmentIncome(){
  let data: string;
  let dbInvIncome: number = 10922;
  let dataType: string = "$";
  data = `
  <table style="width:100%;height:100%;padding:0;">
  <td> Investment Income</td>
  <td>`+dataType+dbInvIncome+`</td>
  </table>
 `
 return data;
}
public getTaxBenExempt(){
  let data: string;
  let dbTaxBenExempt: number = 1751;
  let dataType: string = "$";
  data = `
  <table style="width:100%;height:100%;padding:0;">
  <td> Tax Benefit for Tax-exempt Income </td>
  <td>`+dataType+dbTaxBenExempt+`</td>
  </table>
 `
 return data;
}
public getLoanYield(){
  let data: string;
  let dbLoanYield: number = 4.96;
  let dataType: string = "%";
  data = `
  <table style="width:100%;height:100%;padding:0;">
  <td> Loan Yield </td>
  <td>`+dbLoanYield+dataType+`</td>
  </table>
 `
 return data;
}
public getLoanVolume(){
  let data: string;
  let dbLoanVolume: number = 1921777;
  let dataType: string = "$";
  data = `
  <table style="width:100%;height:100%;padding:0;">
  <td> Loan Volume </td>
  <td>`+dataType+dbLoanVolume+`</td>
  </table>
 `
 return data;
}
public getInvSecurYield(){
  let data: string;
  let dbInvSecurYield: number = 1.95;
  let dataType: string = "%";
  data = `
  <table style="width:100%;height:100%;padding:0;">
  <td> Investment Security Yield </td>
  <td>`+dbInvSecurYield+dataType+`</td>
  </table>
 `
 return data;
}
public getCheckingDeposits(){
  let data: string;
  let dbCheckingDep: number = 1142;
  let dataType: string = "$";
  data = `
  <table style="width:100%;height:100%;padding:0;">
  <td> Checking Deposits </td>
  <td>`+dataType+dbCheckingDep+`</td>
  </table>
 `
 return data;
}
public getCertOfDeposits(){
  let data: string;
  let dbCertOfDep: number = 1848;
  let dataType: string = "$";
  data = `
  <table style="width:100%;height:100%;padding:0;">
  <td> Certificate of Deposits </td>
  <td>`+dataType+dbCertOfDep+`</td>
  </table>
 `
 return data;
}
public getSaveMoneyMarkDep(){
  let data: string;
  let dbSaveMonMarDep :number = 389;
  let dataType: string = "$";
  data = `
  <table style="width:100%;height:100%;padding:0;">
  <td> Savings and Money Market Deposits </td>
  <td>`+dataType+dbSaveMonMarDep+`</td>
  </table>
 `
 return data;
}
public getOthBorrowedFunds(){
  let data: string;
  let dbOthBorFunds: number = 5168;
  let dataType: string = "$";
  data = `
  <table style="width:100%;height:100%;padding:0;">
  <td> Other Borrowed Funds </td>
  <td>`+dataType+dbOthBorFunds+`</td>
  </table>
 `
 return data;
}
public getServiceChargOnDep(){
  let data: string;
  let dbServChargeOnDep: number = 25783;
  let dataType: string = "$";
  data = `
  <table style="width:100%;height:100%;padding:0;">
  <td> Service Charge On Deposits </td>
  <td>`+dataType+dbServChargeOnDep+`</td>
  </table>
 `
 return data;
}
public getWealthManage(){
  let data: string;
  let dbWealthManage: number = 9047;
  let dataType: string = "$";
  data = `
  <table style="width:100%;height:100%;padding:0;">
  <td> Wealth Management Revenue and Other Fee Income </td>
  <td>`+dataType+dbWealthManage+`</td>
  </table>
 `
 return data;
}
public getCheckcardOther(){
  let data: string;
  let dbCheckcardOth: number = 15049;
  let dataType: string = "$";
  data = `
  <table style="width:100%;height:100%;padding:0;">
  <td> Checkcard, ATM, Mortgage Center and Other </td>
  <td>`+dataType+dbCheckcardOth+`</td>
  </table>
 `
 return data;
}
public getOREIncome(){
  let data: string;
  let dbOREIncome: number = 757;
  let dataType: string = "$";
  data = `
  <table style="width:100%;height:100%;padding:0;">
  <td> ORE Income</td>
  <td>`+dataType+dbOREIncome+`</td>
  </table>
 `
 return data;
}
}
