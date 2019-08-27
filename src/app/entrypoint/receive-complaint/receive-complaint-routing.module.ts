import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AllComponent} from './all/all.component';
import {WalkInComplaintComponent} from './walk-in-complaint/walk-in-complaint.component';
import {CallCenterComplaintComponent} from './call-center-complaint/call-center-complaint.component';
import {PostComplaintComponent} from './post-complaint/post-complaint.component';
import {InternetComplaintComponent} from './internet-complaint/internet-complaint.component';
import {OwnMotionComplaintComponent} from './own-motion-complaint/own-motion-complaint.component';

const routes: Routes = [
    {
        path: 'all',
        pathMatch: 'full',
        component: AllComponent,
        data: {name: 'รับเรื่องร้องเรียน : ค้นหา', header: 'รับเรื่องร้องเรียน'}
    },
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
        path: 'post',
        pathMatch: 'full',
        component: PostComplaintComponent,
        data: {name: 'รับเรื่องร้องเรียน : ไปรษณีย์', header: 'รับเรื่องร้องเรียน : ไปรษณีย์'}
    },
    {
        path: 'internet',
        pathMatch: 'full',
        component: InternetComplaintComponent,
        data: {name: 'รับเรื่องร้องเรียน : Internet', header: 'รับเรื่องร้องเรียน : Internet'}
    },
    {
        path: 'own-motion',
        pathMatch: 'full',
        component: OwnMotionComplaintComponent,
        data: {name: 'รับเรื่องร้องเรียน : ผผ.หยิบยก', header: 'รับเรื่องร้องเรียน : ผผ.หยิบยก'}
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReceiveComplaintRoutingModule {
}
