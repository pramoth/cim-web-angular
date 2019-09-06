import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AssignmentRoutingModule} from './assignment-routing.module';
import {AllComponent} from './all/all.component';
import {NgbPaginationModule, NgbTabsetModule} from "@ng-bootstrap/ng-bootstrap";
import {DetailComponent} from './detail/detail.component';
import {FormsModule} from "@angular/forms";


@NgModule({
    declarations: [AllComponent, DetailComponent],
    imports: [
        CommonModule,
        AssignmentRoutingModule,
        NgbPaginationModule,
        NgbTabsetModule,
        FormsModule
    ]
})
export class AssignmentModule {
}
