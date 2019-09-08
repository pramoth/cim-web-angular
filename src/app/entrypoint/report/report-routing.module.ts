import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ReportComponent} from "./report.component";


const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: ReportComponent,
        data: {name: 'รายงาน, สถิติ', header: 'รายงาน, สถิติ',iconClass:'fas fa-chart-bar'}
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReportRoutingModule {
}
