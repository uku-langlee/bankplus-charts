import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Ng2GoogleChartsModule} from 'ng2-google-charts';
import { OrgChartComponent } from './org-chart/org-chart.component';
import { ChartDetailService } from './chart-detail.service';
import { EfficiencyRatioComponent } from './efficiency-ratio/efficiency-ratio.component';
import { ErDetailComponent } from './er-detail/er-detail.component';

@NgModule({
	imports: [BrowserModule, Ng2GoogleChartsModule],
	declarations: [AppComponent, OrgChartComponent, EfficiencyRatioComponent, ErDetailComponent],
	providers:[ChartDetailService],
	bootstrap: [AppComponent]
})
export class AppModule { }