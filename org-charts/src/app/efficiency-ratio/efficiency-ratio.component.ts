import { Component, OnInit } from '@angular/core';
import { ViewChild} from '@angular/core';
import { ChartReadyEvent } from 'ng2-google-charts';
import { ChartErrorEvent } from 'ng2-google-charts';
import { ChartSelectEvent } from 'ng2-google-charts';
import { ChartMouseOverEvent, ChartMouseOutEvent } from 'ng2-google-charts';
import { ChartDetailService } from '../chart-detail.service';
import { iOrgChart } from '../iorg-chart';
import { Input } from '@angular/core';

@Component({
  selector: 'app-efficiency-ratio',
  templateUrl: './efficiency-ratio.component.html',
  styleUrls: ['./efficiency-ratio.component.css']
})
export class EfficiencyRatioComponent implements OnInit {

  @ViewChild('cchart') cchart;
  
    public selectEvent: ChartSelectEvent;
    public orgChartData: iOrgChart;
    public topChart: boolean;  
    
  
    constructor(public chartDetailService: ChartDetailService){
      this.chartDetailService = chartDetailService;
    }
  
    ngOnInit() {
      this.orgChartData = this.chartDetailService.getOrgChart2();
      console.log(this.orgChartData)
    }
    public getTopChart():boolean{
      return this.topChart;
    }
  
    public ready(event: ChartReadyEvent) {
      console.log(event.message);
    }
  
    public error(event: ChartErrorEvent) {
      console.error(event);
    }
  
    public select(event: ChartSelectEvent) {
     this.selectEvent = event;
     if(event.row === 1){
     console.log(event.selectedRowValues)
     }
    }
  }
