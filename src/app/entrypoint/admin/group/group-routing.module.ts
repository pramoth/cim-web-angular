import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllComponent} from "./all/all.component";
import {AddComponent} from "./add/add.component";
import {DetailComponent} from "./detail/detail.component";


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AllComponent,
    data: {name: 'กลุ่มผู้ใช้งาน', header: 'กลุ่มผู้ใช้งาน', iconClass: undefined}
  },
  {
    path: 'add',
    pathMatch: 'full',
    component: AddComponent,
    data: {name: 'เพิ่มกลุ่มผู้ใช้งาน', header: 'เพิ่มกลุ่มผู้ใช้งาน', iconClass: undefined}
  },
  {
    path: 'detail',
    pathMatch: 'full',
    component: DetailComponent,
    data: {name: 'รายละเอียดกลุ่มผู้ใช้งาน', header: 'รายละเอียดกลุ่มผู้ใช้งาน', iconClass: undefined}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRoutingModule { }
