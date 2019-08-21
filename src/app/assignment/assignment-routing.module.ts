import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AllComponent} from "./all/all.component";



const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'all'
  },
  {
    path: 'all',
    pathMatch: 'full',
    component: AllComponent,
    data: {name: 'รอมอบหมายงาน', header: 'รอมอบหมายงาน', iconClass: undefined}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignmentRoutingModule { }
