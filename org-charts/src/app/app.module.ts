import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Ng2GoogleChartsModule} from 'ng2-google-charts';
import { OrgChartComponent } from './org-chart/org-chart.component';
import { ChartDetailService } from './chart-detail.service';

@NgModule({
	imports: [BrowserModule, Ng2GoogleChartsModule],
	declarations: [AppComponent, OrgChartComponent],
	providers:[ChartDetailService],
	bootstrap: [AppComponent]
})
export class AppModule { }