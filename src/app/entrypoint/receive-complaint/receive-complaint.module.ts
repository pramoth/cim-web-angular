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
import {WalkInDetailComponent} from './walk-in-complaint/detail/detail.component';
import {WalkInComplainantDetailComponent} from './walk-in-complaint/complainant-detail/complainant-detail.component';
import {WalkInAccusedDetailComponent} from './walk-in-complaint/accused-detail/accused-detail.component';
import {WalkInResultsComponent} from './walk-in-complaint/results/results.component';
import {CallCenterAccusedDetailComponent} from './call-center-complaint/accused-detail/accused-detail.component';
import {CallCenterComplainantDetailComponent} from './call-center-complaint/complainant-detail/complainant-detail.component';
import {CallCenterDetailComponent} from './call-center-complaint/detail/detail.component';
import {CallCenterResultsComponent} from './call-center-complaint/results/results.component';
import {PostAccusedDetailComponent} from './post-complaint/accused-detail/accused-detail.component';
import {PostComplainantDetailComponent} from './post-complaint/complainant-detail/complainant-detail.component';
import {PostDetailComponent} from './post-complaint/detail/detail.component';
import {PostResultsComponent} from './post-complaint/results/results.component';
import {InternetAccusedDetailComponent} from './internet-complaint/accused-detail/accused-detail.component';
import {InternetComplainantDetailComponent} from './internet-complaint/complainant-detail/complainant-detail.component';
import {InternetDetailComponent} from './internet-complaint/detail/detail.component';
import {InternetResultsComponent} from './internet-complaint/results/results.component';
import {MobileComplaintComponent} from './mobile-complaint/mobile-complaint.component';
import {MobileAccusedDetailComponent} from "./mobile-complaint/accused-detail/accused-detail.component";
import {MobileComplainantDetailComponent} from "./mobile-complaint/complainant-detail/complainant-detail.component";
import {MobileDetailComponent} from "./mobile-complaint/detail/detail.component";
import {MobileResultsComponent} from "./mobile-complaint/results/results.component";
import {OwnMotionAccusedDetailComponent} from "./own-motion-complaint/accused-detail/accused-detail.component";
import {OwnMotionComplainantDetailComponent} from "./own-motion-complaint/complainant-detail/complainant-detail.component";
import {OwnMotionDetailComponent} from "./own-motion-complaint/detail/detail.component";
import {OwnMotionResultsComponent} from "./own-motion-complaint/results/results.component";


@NgModule({
    declarations: [AllComponent,
        WalkInComplaintComponent,
        CallCenterComplaintComponent,
        PostComplaintComponent,
        InternetComplaintComponent,
        OwnMotionComplaintComponent,
        MobileComplaintComponent,
        WalkInDetailComponent, WalkInComplainantDetailComponent,
        WalkInAccusedDetailComponent, WalkInResultsComponent,
        CallCenterAccusedDetailComponent, CallCenterComplainantDetailComponent,
        CallCenterDetailComponent, CallCenterResultsComponent,
        PostAccusedDetailComponent, PostComplainantDetailComponent,
        PostDetailComponent, PostResultsComponent,
        InternetAccusedDetailComponent, InternetComplainantDetailComponent,
        InternetDetailComponent, InternetResultsComponent,
        MobileAccusedDetailComponent, MobileComplainantDetailComponent,
        MobileDetailComponent, MobileResultsComponent,
        OwnMotionAccusedDetailComponent, OwnMotionComplainantDetailComponent,
        OwnMotionDetailComponent, OwnMotionResultsComponent],
    imports: [
        CommonModule,
        ReceiveComplaintRoutingModule,
        NgbPaginationModule,
        NgbTabsetModule
    ]
})
export class ReceiveComplaintModule {
}
