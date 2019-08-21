import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssignmentRoutingModule } from './assignment-routing.module';
import { AllComponent } from './all/all.component';
import {NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [AllComponent],
  imports: [
    CommonModule,
    AssignmentRoutingModule,
    NgbPaginationModule
  ]
})
export class AssignmentModule { }
