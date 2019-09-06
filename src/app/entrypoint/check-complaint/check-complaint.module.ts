import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CheckComplaintRoutingModule} from './check-complaint-routing.module';
import {CheckComplaintComponent} from './check-complaint.component';
import {
    NgbDatepickerModule,
    NgbModalModule,
    NgbPaginationModule,
    NgbTabsetModule,
    NgbTooltipModule
} from '@ng-bootstrap/ng-bootstrap';
import {DetailComponent} from './detail/detail.component';
import {FactComponent} from './detail/fact/fact.component';
import {AboutComponent} from './detail/about/about.component';
import {ForwardComponent} from './detail/forward/forward.component';
import {PrintComponent} from './detail/print/print.component';
import {ConcludeComponent} from './detail/conclude/conclude.component';
import {AttachmentComponent} from './detail/attachment/attachment.component';
import {ReceiveDocComponent} from './detail/receive-doc/receive-doc.component';
import {PlanComponent} from "./detail/plan/plan.component";
import {AddPlanModalComponent} from './detail/plan/add-plan-modal/add-plan-modal.component';
import {FormsModule} from "@angular/forms";


@NgModule({
    declarations: [
        CheckComplaintComponent,
        DetailComponent,
        AboutComponent,
        ForwardComponent,
        PrintComponent,
        FactComponent,
        AttachmentComponent,
        ReceiveDocComponent,
        PlanComponent,
        ConcludeComponent,
        AddPlanModalComponent
    ],
    imports: [
        CommonModule,
        CheckComplaintRoutingModule,
        NgbPaginationModule,
        NgbTabsetModule,
        NgbModalModule,
        NgbDatepickerModule,
        NgbTooltipModule,
        FormsModule
    ],
    entryComponents: [
        AddPlanModalComponent
    ]
})
export class CheckComplaintModule {
}
