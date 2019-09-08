import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AllComponent} from "./all/all.component";
import {DetailComponent} from "./detail/detail.component";


const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: AllComponent,
        data: {name: 'รอมอบหมายงาน', header: 'รอมอบหมายงาน', iconClass: 'fas fa-edit'}
    }, {
        path: 'detail',
        pathMatch: 'full',
        component: DetailComponent,
        data: {name: 'มอบหมายงาน', header: 'มอบหมายงาน', iconClass: 'fas fa-edit'}
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AssignmentRoutingModule {
}
