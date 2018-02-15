import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { OrgChartComponent } from './org-chart/org-chart.component';

@Component({
  selector: 'app-core',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public orgChart: OrgChartComponent;
  public orgChartDisplay: boolean;

  ngOnInit(){
    console.log(this.orgChart);
  }

 showOrgChart(){
   //this.orgChartDisplay = this.orgChart.orgChart;
   return true;
 }
  
}

