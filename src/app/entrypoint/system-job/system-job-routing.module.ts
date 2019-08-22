import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SystemJobComponent} from "./system-job/system-job.component";


const routes: Routes = [
  {
    path: '',
    component: SystemJobComponent,
    data: {name: 'งานเชิงระบบ', header: 'งานเชิงระบบ', iconClass: undefined}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemJobRoutingModule { }
