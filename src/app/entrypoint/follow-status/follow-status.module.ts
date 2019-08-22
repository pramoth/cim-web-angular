import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FollowStatusComponent} from "./follow-status.component";
import {FollowStatusRoutingModule} from "./follow-status-routing.module";
import {NgbPaginationModule, NgbTabsetModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
    declarations: [FollowStatusComponent],
    imports: [
        CommonModule,
        FollowStatusRoutingModule,
        NgbPaginationModule,
        NgbTabsetModule
    ]
})
export class FollowStatusModule {
}
