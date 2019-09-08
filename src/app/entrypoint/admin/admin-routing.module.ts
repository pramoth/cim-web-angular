import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HistoryComponent} from "./history/history.component";


const routes: Routes = [
  {
    path: 'group',
    loadChildren: () => import('./group/group.module').then(m => m.GroupModule)
  },{
    path: 'history',
    pathMatch: 'full',
    component: HistoryComponent,
    data: {name: 'ประวัติการเข้าใช้งาน', header: 'ประวัติการเข้าใช้งาน', iconClass: undefined}
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
