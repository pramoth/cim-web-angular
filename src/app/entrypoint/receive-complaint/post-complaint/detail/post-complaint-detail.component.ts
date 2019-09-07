import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-complaint',
  templateUrl: './post-complaint-detail.component.html',
  styleUrls: ['./post-complaint-detail.component.scss']
})
export class PostComplaintDetailComponent implements OnInit {

  complaintType: string = 'ไปรษณีย์';

  complainantType: 'thai' | 'foreign' | 'agent' | 'group';

  constructor() { }

  ngOnInit() {
  }

}
