import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AllComponent} from "./all/all.component";


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AllComponent,
    data: {name: 'ค้นหาเรื่องร้องเรียน', header: 'ค้นหาเรื่องร้องเรียน', iconClass: 'fas fa-search'}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
