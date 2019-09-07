import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FollowStatusComponent} from "./follow-status.component";
import {FollowStatusRoutingModule} from "./follow-status-routing.module";
import {NgbPaginationModule, NgbTabsetModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";


@NgModule({
    declarations: [FollowStatusComponent],
    imports: [
        CommonModule,
        FollowStatusRoutingModule,
        NgbPaginationModule,
        NgbTabsetModule,
        FormsModule
    ]
})
export class FollowStatusModule {
}
