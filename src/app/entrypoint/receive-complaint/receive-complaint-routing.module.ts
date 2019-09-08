import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CallCenterComplaintComponent} from './call-center-complaint/call-center-complaint.component';
import {PostComplaintComponent} from './post-complaint/post-complaint.component';
import {InternetComplaintComponent} from './internet-complaint/internet-complaint.component';
import {OwnMotionComplaintComponent} from './own-motion-complaint/own-motion-complaint.component';
import {MobileComplaintComponent} from './mobile-complaint/mobile-complaint.component';
import {CallCenterComplaintDetailComponent} from './call-center-complaint/detail/call-center-complaint-detail.component';
import {PostComplaintDetailComponent} from './post-complaint/detail/post-complaint-detail.component';
import {InternetComplaintDetailComponent} from './internet-complaint/detail/internet-complaint-detail.component';
import {MobileComplaintDetailComponent} from './mobile-complaint/detail/mobile-complaint-detail.component';
import {WalkinComplaintComponent} from './walk-in-complaint/walk-in-complaint.component';
import {WalkInDetailomplaintComponent} from './walk-in-complaint/detail/detail.component';

const routes: Routes = [
    {
        path: 'walk-in',
        pathMatch: 'full',
        component: WalkinComplaintComponent,
        data: {name: 'รับเรื่องร้องเรียน : Walk in', header: 'รับเรื่องร้องเรียน : Walk In', iconClass: 'fas fa-walking'}
    },
    {
        path: 'walk-in/new',
        pathMatch: 'full',
        component: WalkInDetailomplaintComponent,
        data: {
            name: 'รับเรื่องร้องเรียน : เพิ่มเรื่อง Walk in',
            header: 'รับเรื่องร้องเรียน : เพิ่มเรื่อง Walk in',
            iconClass: 'fas fa-walking'
        }
    },
    {
        path: 'walk-in/detail',
        pathMatch: 'full',
        component: WalkInDetailomplaintComponent,
        data: {
            name: 'เรื่องร้องเรียน : รายละเอียดเรื่องร้องเรียน Walk in',
            header: 'รับเรื่องร้องเรียน : รายละเอียดเรื่องร้องเรียน Walk in',
            iconClass: 'fas fa-walking'
        }
    },
    {
        path: 'call-center',
        pathMatch: 'full',
        component: CallCenterComplaintComponent,
        data: {name: 'รับเรื่องร้องเรียน : Call Center', header: 'รับเรื่องร้องเรียน : Call Center', iconClass: 'fas fa-phone'}
    },
    {
        path: 'call-center/detail',
        pathMatch: 'full',
        component: CallCenterComplaintDetailComponent,
        data: {name: 'รับเรื่องร้องเรียน : Call Center', header: 'รับเรื่องร้องเรียน : Call Center', iconClass: 'fas fa-phone'}
    },
    {
        path: 'post',
        pathMatch: 'full',
        component: PostComplaintComponent,
        data: {name: 'รับเรื่องร้องเรียน : ไปรษณีย์', header: 'รับเรื่องร้องเรียน : ไปรษณีย์', iconClass: 'fas fa-envelope-open-text'}
    },
    {
        path: 'post/detail',
        pathMatch: 'full',
        component: PostComplaintDetailComponent,
        data: {name: 'รับเรื่องร้องเรียน : ไปรษณีย์', header: 'รับเรื่องร้องเรียน : ไปรษณีย์', iconClass: 'fas fa-envelope-open-text'}
    },
    {
        path: 'internet',
        pathMatch: 'full',
        component: InternetComplaintComponent,
        data: {name: 'รับเรื่องร้องเรียน : Internet', header: 'รับเรื่องร้องเรียน : Internet', iconClass: 'fas fa-globe'}
    },
    {
        path: 'internet-extra',
        pathMatch: 'full',
        component: InternetComplaintComponent,
        data: {
            name: 'รับเรื่องร้องเรียน : เพิ่มเติม Internet',
            header: 'รับเรื่องร้องเรียน : เพิ่มเติม Internet',
            iconClass: 'fas fa-globe'
        }
    },
    {
        path: 'internet/detail',
        pathMatch: 'full',
        component: InternetComplaintDetailComponent,
        data: {name: 'รับเรื่องร้องเรียน : Internet', header: 'รับเรื่องร้องเรียน : Internet', iconClass: 'fas fa-globe'}
    },
    {
        path: 'mobile',
        pathMatch: 'full',
        component: MobileComplaintComponent,
        data: {
            name: 'รับเรื่องร้องเรียน : Mobile Application',
            header: 'รับเรื่องร้องเรียน : Mobile Application',
            iconClass: 'fas fa-mobile-alt'
        }
    },
    {
        path: 'mobile-extra',
        pathMatch: 'full',
        component: MobileComplaintComponent,
        data: {
            name: 'รับเรื่องร้องเรียน : เพิ่มเติม Mobile Application',
            header: 'รับเรื่องร้องเรียน : เพิ่มเติม Mobile Application',
            iconClass: 'fas fa-mobile-alt'
        }
    },
    {
        path: 'mobile/detail',
        pathMatch: 'full',
        component: MobileComplaintDetailComponent,
        data: {
            name: 'รับเรื่องร้องเรียน : Mobile Application',
            header: 'รับเรื่องร้องเรียน : Mobile Application',
            iconClass: 'fas fa-mobile-alt'
        }
    },
    {
        path: 'own-motion',
        pathMatch: 'full',
        component: OwnMotionComplaintComponent,
        data: {name: 'รับเรื่องร้องเรียน : Own Motion', header: 'รับเรื่องร้องเรียน : Own Motion',iconClass: 'fas fa-plus-circle'}
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReceiveComplaintRoutingModule {
}
