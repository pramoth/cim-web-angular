import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AllComponent} from './all/all.component';
import {ReceiveComplaintRoutingModule} from './receive-complaint-routing.module';
import {WalkInComplaintComponent} from './walk-in-complaint/walk-in-complaint.component';
import {CallCenterComplaintComponent} from './call-center-complaint/call-center-complaint.component';
import {PostComplaintComponent} from './post-complaint/post-complaint.component';
import {InternetComplaintComponent} from './internet-complaint/internet-complaint.component';
import {OwnMotionComplaintComponent} from './own-motion-complaint/own-motion-complaint.component';
import {NgbPaginationModule, NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';
import {MobileComplaintComponent} from './mobile-complaint/mobile-complaint.component';


@NgModule({
    declarations: [AllComponent,
        WalkInComplaintComponent,
        CallCenterComplaintComponent,
        PostComplaintComponent,
        InternetComplaintComponent,
        OwnMotionComplaintComponent,
        MobileComplaintComponent],
    imports: [
        CommonModule,
        ReceiveComplaintRoutingModule,
        NgbPaginationModule,
        NgbTabsetModule
    ]
})
export class ReceiveComplaintModule {
}
