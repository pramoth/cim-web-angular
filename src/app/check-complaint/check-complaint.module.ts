import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CheckComplaintRoutingModule} from './check-complaint-routing.module';
import {CheckComplaintComponent} from './check-complaint.component';
import {NgbPaginationModule, NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';
import {DetailComponent} from './detail/detail.component';
import {AboutComponent} from './detail/about/about.component';
import {ForwardComponent} from './detail/forward/forward.component';
import {PrintComponent} from './detail/print/print.component';
import {ComplaintInfoComponent} from './detail/complaint-info/complaint-info.component';


@NgModule({
    declarations: [CheckComplaintComponent, DetailComponent, AboutComponent, ForwardComponent, PrintComponent, ComplaintInfoComponent],
    imports: [
        CommonModule,
        CheckComplaintRoutingModule,
        NgbPaginationModule,
        NgbTabsetModule
    ]
})
export class CheckComplaintModule {
}
