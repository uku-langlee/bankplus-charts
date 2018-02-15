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
  selector: 'app-org-chart',
  templateUrl: './org-chart.component.html',
  styleUrls: ['./org-chart.component.css']
})
export class OrgChartComponent implements OnInit {

  @ViewChild('cchart') cchart;
  @Input() orgChart: boolean;

  public selectEvent: ChartSelectEvent;
  public orgChartData: iOrgChart;  
  

  constructor(public chartDetailService: ChartDetailService){
    chartDetailService = this.chartDetailService;
  }

  ngOnInit() {
    this.orgChartData = this.chartDetailService.getOrgChart1();
    console.log(this.orgChartData)
  }

  public ready(event: ChartReadyEvent) {
    console.log(event.message);
  }

  public error(event: ChartErrorEvent) {
    console.error(event);
  }

  public select(event: ChartSelectEvent) {
    this.selectEvent = event;
  }
}
