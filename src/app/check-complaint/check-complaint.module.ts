import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CheckComplaintRoutingModule} from './check-complaint-routing.module';
import {CheckComplaintComponent} from './check-complaint.component';
import {NgbPaginationModule, NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';
import {DetailComponent} from './detail/detail.component';
import {FactComponent} from './detail/fact/fact.component';
import {AboutComponent} from './detail/about/about.component';
import {ForwardComponent} from './detail/forward/forward.component';
import {PrintComponent} from './detail/print/print.component';
import {ComplaintInfoComponent} from './detail/complaint-info/complaint-info.component';
import { ComplaintComponent } from './detail/complaint/complaint.component';
import { AttachmentComponent } from './detail/attachment/attachment.component';
import { ReceiveDocComponent } from './detail/receive-doc/receive-doc.component';


@NgModule({
    declarations: [
        CheckComplaintComponent,
        DetailComponent,
        AboutComponent,
        ForwardComponent,
        PrintComponent,
        FactComponent,
        ComplaintInfoComponent,
        ComplaintComponent,
        AttachmentComponent,
        ReceiveDocComponent
    ],
    imports: [
        CommonModule,
        CheckComplaintRoutingModule,
        NgbPaginationModule,
        NgbTabsetModule
    ]
})
export class CheckComplaintModule {
}
