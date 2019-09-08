import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupRoutingModule } from './group-routing.module';
import { AllComponent } from './all/all.component';


@NgModule({
  declarations: [AllComponent],
  imports: [
    CommonModule,
    GroupRoutingModule
  ]
})
export class GroupModule { }
