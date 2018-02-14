import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Ng2GoogleChartsModule} from 'ng2-google-charts';
import { OrgChartComponent } from './org-chart/org-chart.component';

@NgModule({
	imports: [BrowserModule, Ng2GoogleChartsModule],
	declarations: [AppComponent, OrgChartComponent],
	bootstrap: [AppComponent]
})
export class AppModule { }