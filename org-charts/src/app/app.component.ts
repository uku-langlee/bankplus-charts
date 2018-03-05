import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { OrgChartComponent } from './org-chart/org-chart.component';
import { ChartDetailService } from './chart-detail.service';

@Component({
  selector: 'app-core',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public orgChartDisplay: boolean = true;

  constructor(public chartDetailService: ChartDetailService) {
  }

  ngOnInit() {
  }

  public showOrgChart(): boolean {
    this.orgChartDisplay = this.chartDetailService.getTopChart();
    return this.orgChartDisplay;
  }
  public backToOrgChart(): boolean {
    this.orgChartDisplay = !this.chartDetailService.getTopChart();
    return this.orgChartDisplay;
  }

}

