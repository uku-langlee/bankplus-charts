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
  public roaData:number = 1.04;
  public topTitle: string = `
  <div class="topTitle">
    <h1> Bankplus</h1>
    <br>
    <h3>Corporate Goals</h3>
  </div>`;
  public topRoa ={ v:'roaData', f: this.getRoaData()}
  public topEr ={v:'67.65%', f: `
  <div class="topEr">
    <div class="erTitle">
      <h3>Efficiency Ratio</h3>
    </div>
    <br>
    <div style="background:green;box-shadow: 1px 1px 1px grey;">
      <h2>67.65%</h2>
    </div>
  </div>  
  `}

  
 
  public getOrgChart1():iOrgChart{
  this.orgChart1 = {    
    chartType: 'OrgChart',
    dataTable: [
     ['title',this.topTitle,''],
     [this.topRoa,this.topTitle,''],
     [this.topEr,this.topTitle,'Clcik Here for Details'],
     ['Child3',this.topTitle,''],
     ['Child4',this.topTitle,'']
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
  return this.orgChart1;
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
 let dataGood:string;
 let dbRoa: number = 1.04;
 let roaDataType: string = "%";
 dataGood = `
 <div class="topRoa">
   <div class="roaTitle">
     <h3>ROA</h3>
   </div>
   <br>
   <div style="background:green;box-shadow: 1px 1px 1px grey;">
     <h2>`+ dbRoa+`</h2>
   </div>
 </div>  
 `

  return dataGood;
}
}
