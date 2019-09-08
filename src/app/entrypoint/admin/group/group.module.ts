import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupRoutingModule } from './group-routing.module';
import { AllComponent } from './all/all.component';
import {NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";
import { AddComponent } from './add/add.component';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [AllComponent, AddComponent, DetailComponent],
  imports: [
    CommonModule,
    GroupRoutingModule,
    NgbPaginationModule
  ]
})
export class GroupModule { }
