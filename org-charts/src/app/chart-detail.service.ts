import { Injectable } from '@angular/core';
import { ChartReadyEvent } from 'ng2-google-charts';
import { ChartErrorEvent } from 'ng2-google-charts';
import { ChartSelectEvent } from 'ng2-google-charts';
import { ChartMouseOverEvent, ChartMouseOutEvent } from 'ng2-google-charts';
import { iOrgChart } from './iorg-chart';

@Injectable()
export class ChartDetailService {

  constructor() { }

  public orgChart1: iOrgChart;
  public name1: string = 'Langlee';
  public formatted1:{}= {v:'Jim', f:'Jim<div style="color:red; font-style:italic">Vice President</div>'};

  public getOrgChart1():iOrgChart{
  this.orgChart1 = {    
    chartType: 'OrgChart',
    dataTable: [
      [this.name1,'', 'The President'],
     [this.formatted1,this.name1, 'VP'],
     ['Alice',this.name1, ''],
     ['Bob', 'Jim', 'Bob Sponge'],
     ['Carol', 'Bob', '']
    ],
    options: {
        title: 'Efficiency Ratios',
        allowHtml: true,
        allowCollapse: true
    }


  }
  return this.orgChart1;
}

}
