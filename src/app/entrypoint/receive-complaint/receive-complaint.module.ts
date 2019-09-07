import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReceiveComplaintRoutingModule} from './receive-complaint-routing.module';
import {WalkInComplaintComponent} from './walk-in-complaint/walk-in-complaint.component';
import {CallCenterComplaintComponent} from './call-center-complaint/call-center-complaint.component';
import {PostComplaintComponent} from './post-complaint/post-complaint.component';
import {InternetComplaintComponent} from './internet-complaint/internet-complaint.component';
import {OwnMotionComplaintComponent} from './own-motion-complaint/own-motion-complaint.component';
import {NgbPaginationModule, NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';
import {MobileComplaintComponent} from './mobile-complaint/mobile-complaint.component';
import {FormsModule} from "@angular/forms";
import {CallCenterComplaintDetailComponent} from "./call-center-complaint/detail/call-center-complaint-detail.component";
import {PostComplaintDetailComponent} from "./post-complaint/detail/post-complaint-detail.component";
import {InternetComplaintDetailComponent} from "./internet-complaint/detail/internet-complaint-detail.component";
import {MobileComplaintDetailComponent} from "./mobile-complaint/detail/mobile-complaint-detail.component";


@NgModule({
    declarations: [
        WalkInComplaintComponent,
        CallCenterComplaintComponent, CallCenterComplaintDetailComponent,
        PostComplaintComponent, PostComplaintDetailComponent,
        InternetComplaintComponent, InternetComplaintDetailComponent,
        OwnMotionComplaintComponent,
        MobileComplaintComponent, MobileComplaintDetailComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReceiveComplaintRoutingModule,
        NgbPaginationModule,
        NgbTabsetModule
    ]
})
export class ReceiveComplaintModule {
}
