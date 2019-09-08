import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllComponent} from "./all/all.component";


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AllComponent,
    data: {name: 'กลุ่มผู้ใช้งาน', header: 'กลุ่มผู้ใช้งาน', iconClass: undefined}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRoutingModule { }
