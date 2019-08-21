import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CheckComplaintRoutingModule} from './check-complaint-routing.module';
import {CheckComplaintComponent} from './check-complaint.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
    declarations: [CheckComplaintComponent],
    imports: [
        CommonModule,
        CheckComplaintRoutingModule,
        NgbPaginationModule,
    ]
})
export class CheckComplaintModule {
}
