import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-internet-complaint',
  templateUrl: './internet-complaint.component.html',
  styleUrls: ['./internet-complaint.component.scss']
})
export class InternetComplaintComponent implements OnInit {

  complaintType: string = 'Internet';

  complainantType: 'thai' | 'foreign' | 'agent' | 'group';

  constructor() { }

  ngOnInit() {
  }

}
