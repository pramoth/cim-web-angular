import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-call-center-complaint',
  templateUrl: './call-center-complaint.component.html',
  styleUrls: ['./call-center-complaint.component.scss']
})
export class CallCenterComplaintComponent implements OnInit {

  complaintType: string = 'Call Center';

  complainantType: 'thai' | 'foreign' | 'agent' | 'group';

  constructor() { }

  ngOnInit() {
  }

}
