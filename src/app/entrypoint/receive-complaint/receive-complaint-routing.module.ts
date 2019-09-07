import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WalkInComplaintComponent} from './walk-in-complaint/walk-in-complaint.component';
import {CallCenterComplaintComponent} from './call-center-complaint/call-center-complaint.component';
import {PostComplaintComponent} from './post-complaint/post-complaint.component';
import {InternetComplaintComponent} from './internet-complaint/internet-complaint.component';
import {OwnMotionComplaintComponent} from './own-motion-complaint/own-motion-complaint.component';
import {MobileComplaintComponent} from "./mobile-complaint/mobile-complaint.component";
import {CallCenterComplaintDetailComponent} from "./call-center-complaint/detail/call-center-complaint-detail.component";
import {PostComplaintDetailComponent} from "./post-complaint/detail/post-complaint-detail.component";
import {InternetComplaintDetailComponent} from "./internet-complaint/detail/internet-complaint-detail.component";
import {MobileComplaintDetailComponent} from "./mobile-complaint/detail/mobile-complaint-detail.component";

const routes: Routes = [
    {
        path: 'walk-in',
        pathMatch: 'full',
        component: WalkInComplaintComponent,
        data: {name: 'รับเรื่องร้องเรียน : Walk in', header: 'รับเรื่องร้องเรียน : Walk In'}
    },
    {
        path: 'call-center',
        pathMatch: 'full',
        component: CallCenterComplaintComponent,
        data: {name: 'รับเรื่องร้องเรียน : Call Center', header: 'รับเรื่องร้องเรียน : Call Center'}
    },
    {
        path: 'call-center/detail',
        pathMatch: 'full',
        component: CallCenterComplaintDetailComponent,
        data: {name: 'รับเรื่องร้องเรียน : Call Center', header: 'รับเรื่องร้องเรียน : Call Center'}
    },
    {
        path: 'post',
        pathMatch: 'full',
        component: PostComplaintComponent,
        data: {name: 'รับเรื่องร้องเรียน : ไปรษณีย์', header: 'รับเรื่องร้องเรียน : ไปรษณีย์'}
    },
    {
        path: 'post/detail',
        pathMatch: 'full',
        component: PostComplaintDetailComponent,
        data: {name: 'รับเรื่องร้องเรียน : ไปรษณีย์', header: 'รับเรื่องร้องเรียน : ไปรษณีย์'}
    },
    {
        path: 'internet',
        pathMatch: 'full',
        component: InternetComplaintComponent,
        data: {name: 'รับเรื่องร้องเรียน : Internet', header: 'รับเรื่องร้องเรียน : Internet'}
    },
    {
        path: 'internet/detail',
        pathMatch: 'full',
        component: InternetComplaintDetailComponent,
        data: {name: 'รับเรื่องร้องเรียน : Internet', header: 'รับเรื่องร้องเรียน : Internet'}
    },
    {
        path: 'mobile',
        pathMatch: 'full',
        component: MobileComplaintComponent,
        data: {name: 'รับเรื่องร้องเรียน : Mobile Application', header: 'รับเรื่องร้องเรียน : Mobile Application'}
    },
    {
        path: 'mobile/detail',
        pathMatch: 'full',
        component: MobileComplaintDetailComponent,
        data: {name: 'รับเรื่องร้องเรียน : Mobile Application', header: 'รับเรื่องร้องเรียน : Mobile Application'}
    },
    {
        path: 'own-motion',
        pathMatch: 'full',
        component: OwnMotionComplaintComponent,
        data: {name: 'รับเรื่องร้องเรียน : Own Motion', header: 'รับเรื่องร้องเรียน : Own Motion'}
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReceiveComplaintRoutingModule {
}
