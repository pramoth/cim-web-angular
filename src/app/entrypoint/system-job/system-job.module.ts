import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SystemJobRoutingModule} from './system-job-routing.module';
import {SystemJobComponent} from './system-job/system-job.component';
import {NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [SystemJobComponent],
  imports: [
    CommonModule,
    SystemJobRoutingModule,
    NgbPaginationModule
  ]
})
export class SystemJobModule { }
