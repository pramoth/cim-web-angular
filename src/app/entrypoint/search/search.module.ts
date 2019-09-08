import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { AllComponent } from './all/all.component';
import { TableContentComponent } from './table-content/table-content.component';
import { TextContentComponent } from './text-content/text-content.component';
import {NgbModalModule, NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";
import { PrintModalComponent } from './print-modal/print-modal.component';


@NgModule({
  declarations: [AllComponent, TableContentComponent, TextContentComponent, PrintModalComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    NgbPaginationModule,
    FormsModule,
    NgbModalModule
  ],
  entryComponents:[
    PrintModalComponent
  ]
})
export class SearchModule { }
