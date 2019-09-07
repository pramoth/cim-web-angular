import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-call-center-complaint',
  templateUrl: './call-center-complaint-detail.component.html',
  styleUrls: ['./call-center-complaint-detail.component.scss']
})
export class CallCenterComplaintDetailComponent implements OnInit {

  complaintType: string = 'Call Center';

  complainantType: 'thai' | 'foreign' | 'agent' | 'group';

  constructor() { }

  ngOnInit() {
  }

}
