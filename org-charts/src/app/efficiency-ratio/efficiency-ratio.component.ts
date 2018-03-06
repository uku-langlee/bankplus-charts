import { Component, OnInit, EventEmitter, ElementRef, AfterViewInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ChartReadyEvent, GoogleChartComponent } from 'ng2-google-charts';
import { ChartErrorEvent } from 'ng2-google-charts';
import { ChartSelectEvent } from 'ng2-google-charts';
import { ChartMouseOverEvent, ChartMouseOutEvent } from 'ng2-google-charts';
import { ChartDetailService } from '../chart-detail.service';
import { iOrgChart } from '../iorg-chart';
import { Input, Output } from '@angular/core';

@Component({
  selector: 'app-efficiency-ratio',
  templateUrl: './efficiency-ratio.component.html',
  styleUrls: ['./efficiency-ratio.component.css']
})
export class EfficiencyRatioComponent implements OnInit {

  @ViewChild('cchart') cchart: GoogleChartComponent;

  public selectEvent: ChartSelectEvent;
  public orgChartData: iOrgChart;
  public topChart: boolean;
  public chart: any;
  public flag: boolean = false;
  public liveArray: number[] = [];

  constructor(public chartDetailService: ChartDetailService) {
    this.chartDetailService = chartDetailService;
  }

  ngOnInit() {
    this.orgChartData = this.chartDetailService.getEfficiencyRatioOrgChart();
  }

  public getTopChart(): void {
    let googleChartWrapper = this.cchart.wrapper;
    this.chart = googleChartWrapper.getChart();
    this.chart.collapse(0, true);
    this.chart.collapse(1, true);
    this.chart.collapse(2, true);
    this.chart.collapse(3, true);
  }

  public ready(event: ChartReadyEvent) {
    if (this.flag === false) {
      this.getTopChart();
      this.liveArray = this.chart.getCollapsedNodes();
      this.flag = true;
    }
  }

  public error(event: ChartErrorEvent) {
    console.error(event);
  }

  public select(event: ChartSelectEvent) {
    this.selectEvent = event;
    let selection: any[] = this.chart.getSelection();
    if (selection.length > 0) {
      switch (selection[0].row) {
        case 0:
          this.chart.collapse(1, true);
          this.chart.collapse(2, true);
          this.chart.collapse(3, true);
        case 1:
          this.chart.collapse(0, true);
          this.chart.collapse(2, true);
          this.chart.collapse(3, true);
        case 2:
          this.chart.collapse(0, true);
          this.chart.collapse(1, true);
          this.chart.collapse(3, true);
        case 3:
          this.chart.collapse(0, true);
          this.chart.collapse(1, true);
          this.chart.collapse(2, true);

      }
    }
  }
}
