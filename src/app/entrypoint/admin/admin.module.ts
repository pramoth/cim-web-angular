import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {FormsModule} from "@angular/forms";
import { HistoryComponent } from './history/history.component';
import {NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [ HistoryComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    NgbPaginationModule
  ]
})
export class AdminModule { }
