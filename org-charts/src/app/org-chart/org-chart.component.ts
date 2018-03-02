import { Component, OnInit , ElementRef} from '@angular/core';
import { ViewChild } from '@angular/core';
import { ChartErrorEvent, GoogleChartComponent } from 'ng2-google-charts';
import { ChartSelectEvent } from 'ng2-google-charts';
import { ChartReadyEvent } from 'ng2-google-charts';
import { ChartMouseOverEvent, ChartMouseOutEvent } from 'ng2-google-charts';
import { ChartDetailService } from '../chart-detail.service';
import { iOrgChart } from '../iorg-chart'; 
import { Input } from '@angular/core';
import { GoogleChartsLoaderService } from '../../../node_modules/ng2-google-charts/google-charts-loader.service';
import { EventEmitter } from 'events';


@Component({
  selector: 'app-org-chart',
  templateUrl: './org-chart.component.html',
  styleUrls: ['./org-chart.component.css']
})
export class OrgChartComponent implements OnInit {  

  @ViewChild('cchart') cchart;

  public loader: GoogleChartsLoaderService;  
  public orgChartData: iOrgChart;
  public topChart: boolean;
  public selectEvent: ChartSelectEvent;
  public chart;
  public el: ElementRef;


  constructor(public chartDetailService: ChartDetailService, el:ElementRef) {
    this.chartDetailService = chartDetailService;  
    this.el = el;
       
  }

  ngOnInit() {
    this.orgChartData = this.chartDetailService.getOrgChart1();
    this.topChart = this.chartDetailService.changeTopChart();
    this.topChart = true;
   

  }

  public getTopChart(): any {
    let googleChartWrapper = this.cchart.wrapper;
    this.chart = googleChartWrapper.getChart().collapse(0, true);
    
    return googleChartWrapper;
  }

  public error(event: ChartErrorEvent) {
    console.error(event);
  }
  public ready(event: ChartReadyEvent) {
    this.getTopChart();
  }

  public select(event: ChartSelectEvent) {
    this.selectEvent = event;
    if (event.row === 1) {
      console.log(event.selectedRowValues)
      this.chartDetailService.changeTopChart();
    }
  }
}
