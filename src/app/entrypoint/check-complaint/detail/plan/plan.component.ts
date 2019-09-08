import {Component, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AddPlanModalComponent} from "./add-plan-modal/add-plan-modal.component";

@Component({
    selector: 'app-plan',
    templateUrl: './plan.component.html',
    styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {
    data: { id: number }[] = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5},
        {id: 6}, {id: 7}, {id: 8}, {id: 9}, {id: 10}];

    constructor(private modalService: NgbModal) {
    }

    ngOnInit() {
    }

    open() {
        const modalRef = this.modalService.open(AddPlanModalComponent, {size: 'lg'});
    }

    deleteRow(id) {
        for (let i = 0; i < this.data.length; ++i) {
            if (this.data[i].id === id) {
                this.data.splice(i, 1);
            }
        }
    }
}
