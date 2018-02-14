import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ChartReadyEvent } from 'ng2-google-charts';
import { ChartErrorEvent } from 'ng2-google-charts';
import { ChartSelectEvent } from 'ng2-google-charts';
import { ChartMouseOverEvent, ChartMouseOutEvent } from 'ng2-google-charts';


@Component({
  selector: 'app-org-chart',
  templateUrl: './org-chart.component.html',
  styleUrls: ['./org-chart.component.css']
})
export class OrgChartComponent implements OnInit {

  @ViewChild('cchart') cchart;

  public selectEvent: ChartSelectEvent;

  public orgChartData: any = {
    chartType: 'OrgChart',
    dataTable: [
      [{ v: 'Mike', f: 'Mike<div style="color:red; font-style:italic">President</div>' },
        '', 'The President'],
      [{ v: 'Jim', f: 'Jim<div style="color:red; font-style:italic">Vice President</div>' },
        'Mike', 'VP'],
      ['Alice', 'Mike', ''],
      ['Bob', 'Jim', 'Bob Sponge'],
      ['Carol', 'Bob', '']
    ],
    options: { title: 'Countries' }
  };


  ngOnInit() {

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
