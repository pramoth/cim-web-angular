import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AssignmentRoutingModule} from './assignment-routing.module';
import {AllComponent} from './all/all.component';
import {NgbPaginationModule, NgbTabsetModule} from "@ng-bootstrap/ng-bootstrap";
import {DetailComponent} from './detail/detail.component';


@NgModule({
    declarations: [AllComponent, DetailComponent],
    imports: [
        CommonModule,
        AssignmentRoutingModule,
        NgbPaginationModule,
        NgbTabsetModule
    ]
})
export class AssignmentModule {
}
