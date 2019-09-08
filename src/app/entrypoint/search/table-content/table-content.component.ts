import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {PrintModalComponent} from "../print-modal/print-modal.component";

@Component({
  selector: 'app-table-content',
  templateUrl: './table-content.component.html',
  styleUrls: ['./table-content.component.scss']
})
export class TableContentComponent implements OnInit {


  @Input()
  items: { name: string, route: string, complainant: string ,detail:string}[] = [];
  @Input()
  page:number;
  result: any;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }


  showPrintModal(){

    const modalRef = this.modalService.open(PrintModalComponent);

  }
}
