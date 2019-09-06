import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ReportRoutingModule} from './report-routing.module';
import {ReportComponent} from './report.component';
import {ChartsModule} from "ng2-charts";

@NgModule({
    declarations: [
        ReportComponent,
    ],
    imports: [
        CommonModule,
        ReportRoutingModule,
        ChartsModule,
    ]
})
export class ReportModule {
}
