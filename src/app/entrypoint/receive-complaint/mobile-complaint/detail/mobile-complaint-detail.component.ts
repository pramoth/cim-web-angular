import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-complaint',
  templateUrl: './mobile-complaint-detail.component.html',
  styleUrls: ['./mobile-complaint-detail.component.scss']
})
export class MobileComplaintDetailComponent implements OnInit {

  complaintType: string = 'Mobile Application';

  complainantType: 'thai' | 'foreign' | 'agent' | 'group';

  constructor() { }

  ngOnInit() {
  }

}
