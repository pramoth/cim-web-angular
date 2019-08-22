import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainContentComponent} from "./main-content/main-content.component";
import {EntrypointComponent} from "./entrypoint.component";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
    },
    {
        path: '',
        component: EntrypointComponent,
        children: [
            {
                path: 'dashboard',
                component: MainContentComponent,
                data: {name: 'Dashboard', header: 'Dashboard', iconClass: undefined}
            },
            {
                path: 'form',
                loadChildren: () => import('./form-demo/form-demo.module').then(m => m.FormDemoModule)
            },
            {
                path: 'check-complaint',
                loadChildren: () => import('./check-complaint/check-complaint.module').then(m => m.CheckComplaintModule)
            },
            {
                path: 'assignment',
                loadChildren: () => import('./assignment/assignment.module').then(m => m.AssignmentModule)
            },
            {
                path: 'receive-complaint',
                loadChildren: () => import('./receive-complaint/receive-complaint.module').then(m => m.ReceiveComplaintModule)
            },
            {
                path: 'follow-status',
                loadChildren: () => import ('./follow-status/follow-status.module').then(m => m.FollowStatusModule)
            },
            {
                path: 'sign-complaint',
                loadChildren: () => import ('./sign-complaint/sign-complaint.module').then(m => m.SignComplaintModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EntrypointRoutingModule {
}
