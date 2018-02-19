import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { OrgChartComponent } from './org-chart/org-chart.component';
import { ChartDetailService } from './chart-detail.service';

@Component({
  selector: 'app-core',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //public orgChart: OrgChartComponent;
  public orgChartDisplay: boolean = true;

  constructor(public chartDetailService:ChartDetailService){
  }

  ngOnInit(){
    //console.log(this.orgChart);
  }

 public showOrgChart():boolean{
   this.orgChartDisplay = this.chartDetailService.getTopChart();
   console.log(this.orgChartDisplay);
   return this.orgChartDisplay;
 }
 public backToOrgChart():boolean{
   this.orgChartDisplay === !this.orgChartDisplay;
   console.log(this.orgChartDisplay);
   return this.orgChartDisplay;
 }
  
}

