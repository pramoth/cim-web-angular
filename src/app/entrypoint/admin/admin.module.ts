import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {FormsModule} from "@angular/forms";
import { HistoryComponent } from './history/history.component';


@NgModule({
  declarations: [ HistoryComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
