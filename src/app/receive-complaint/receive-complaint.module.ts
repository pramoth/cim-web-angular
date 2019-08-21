import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AllComponent} from './all/all.component';
import {ReceiveComplaintRoutingModule} from './receive-complaint-routing.module';
import {WalkInComplaintComponent} from './walk-in-complaint/walk-in-complaint.component';
import {CallCenterComplaintComponent} from './call-center-complaint/call-center-complaint.component';
import {PostComplaintComponent} from './post-complaint/post-complaint.component';
import {InternetComplaintComponent} from './internet-complaint/internet-complaint.component';
import {OwnMotionComplaintComponent} from './own-motion-complaint/own-motion-complaint.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
    declarations: [AllComponent, WalkInComplaintComponent, CallCenterComplaintComponent, PostComplaintComponent,
        InternetComplaintComponent, OwnMotionComplaintComponent],
    imports: [
        CommonModule,
        ReceiveComplaintRoutingModule,
        NgbPaginationModule
    ]
})
export class ReceiveComplaintModule {
}
