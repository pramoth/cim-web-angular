import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CheckComplaintComponent} from './check-complaint.component';


const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: CheckComplaintComponent,
        data: {name: 'ตรวจสอบเรื่องร้องเรียน', header: 'ตรวจสอบเรื่องร้องเรียน'}
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CheckComplaintRoutingModule {
}
