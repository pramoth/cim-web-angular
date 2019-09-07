import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-internet-complaint',
  templateUrl: './internet-complaint-detail.component.html',
  styleUrls: ['./internet-complaint-detail.component.scss']
})
export class InternetComplaintDetailComponent implements OnInit {

  complaintType: string = 'Internet';

  complainantType: 'thai' | 'foreign' | 'agent' | 'group';

  constructor() { }

  ngOnInit() {
  }

}
