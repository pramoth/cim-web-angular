import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignComponent} from "./sign/sign.component";


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SignComponent,
    data: {name: 'การลงนามยุติเรื่องร้องเรียน', header: 'การลงนามยุติเรื่องร้องเรียน (ออกเลขแดง)', iconClass: undefined}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignComplaintRoutingModule { }
