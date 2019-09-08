import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AllComponent} from "./all/all.component";




const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AllComponent,
    data: {name: 'ผู้ใช้งาน', header: 'ผู้ใช้งาน', iconClass: undefined}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
