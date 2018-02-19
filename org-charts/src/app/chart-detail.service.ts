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
  public nonIntExpense = {v:'nonIntExp'};
  public intIncome = {v:'intInc'};
  public nonIntIncome = {v:'nonIntInc'};
  
 
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
     ['noninterest expense',this.erTitle,''],
     ['interest income',this.erTitle,''],
     [this.intExpense,this.erTitle,''],
     ['noninterest income',this.erTitle,''],
     ['interest on loans', 'interest income', '']
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
}
