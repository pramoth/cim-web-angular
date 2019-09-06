import { Component, OnInit } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AddPlanModalComponent} from "./add-plan-modal/add-plan-modal.component";

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {

  constructor(private modalService: NgbModal) {}
  ngOnInit() {
  }

  open() {
    const modalRef = this.modalService.open(AddPlanModalComponent,{size: 'lg'});
  }

}
