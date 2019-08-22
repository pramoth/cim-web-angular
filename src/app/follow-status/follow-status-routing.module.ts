import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {FollowStatusComponent} from "./follow-status.component";


const routes: Routes = [
    {
        path: '',
        component: FollowStatusComponent,
        data: {name: 'ติดตามสถานะ', header: 'ติดตามสถานะ'}
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FollowStatusRoutingModule {
}
