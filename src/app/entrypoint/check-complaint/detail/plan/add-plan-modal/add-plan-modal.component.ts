import {Component} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'app-add-plan-modal',
    templateUrl: './add-plan-modal.component.html',
    styleUrls: ['./add-plan-modal.component.scss']
})
export class AddPlanModalComponent {

    constructor(public activeModal: NgbActiveModal) {
    }

}
