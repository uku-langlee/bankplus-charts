import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-er-detail',
  templateUrl: './er-detail.component.html',
  styleUrls: ['./er-detail.component.css']
})
export class ErDetailComponent implements OnInit {

  public topChart: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  public changeTopChart(){
    this.topChart = !this.topChart;
    console.log(this.topChart);
  }

}
