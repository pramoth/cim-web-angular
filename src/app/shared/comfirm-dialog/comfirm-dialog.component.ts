import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-comfirm-dialog',
  templateUrl: './comfirm-dialog.component.html',
  styleUrls: ['./comfirm-dialog.component.scss']
})
export class ComfirmDialogComponent implements OnInit {
  content: string;
  title: string = 'กรุณายืนยัน';
  confirmButtonMsg = 'ยืนยัน';
  closeButtonMsg = 'ยกเลิก';

  constructor(public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
  }

  confirm(): void {
    this.activeModal.close(true)
  }

  cancel(): void {
    this.activeModal.close(false)
  }
}
