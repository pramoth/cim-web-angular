import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { AllComponent } from './all/all.component';
import { TableContentComponent } from './table-content/table-content.component';
import { TextContentComponent } from './text-content/text-content.component';
import {NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [AllComponent, TableContentComponent, TextContentComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    NgbPaginationModule,
    FormsModule
  ]
})
export class SearchModule { }
