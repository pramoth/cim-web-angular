import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CheckComplaintRoutingModule} from './check-complaint-routing.module';
import {CheckComplaintComponent} from './check-complaint.component';
import {NgbPaginationModule, NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';
import {DetailComponent} from './detail/detail.component';
import { AboutComponent } from './detail/about/about.component';
import { ForwardComponent } from './detail/forward/forward.component';


@NgModule({
    declarations: [CheckComplaintComponent, DetailComponent, AboutComponent, ForwardComponent],
    imports: [
        CommonModule,
        CheckComplaintRoutingModule,
        NgbPaginationModule,
        NgbTabsetModule
    ]
})
export class CheckComplaintModule {
}
