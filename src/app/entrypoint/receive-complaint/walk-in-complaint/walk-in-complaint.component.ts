import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-walk-in-complaint',
  templateUrl: './walk-in-complaint.component.html',
  styleUrls: ['./walk-in-complaint.component.scss']
})
export class WalkInComplaintComponent implements OnInit {

  complaintType: string = 'Walk In';

  complainantType: 'thai' | 'foreign' | 'agent' | 'group';

  constructor() { }

  ngOnInit() {
  }

}
