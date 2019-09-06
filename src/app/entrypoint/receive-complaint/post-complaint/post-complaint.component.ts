import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-complaint',
  templateUrl: './post-complaint.component.html',
  styleUrls: ['./post-complaint.component.scss']
})
export class PostComplaintComponent implements OnInit {

  complaintType: string = 'ไปรษณีย์';

  constructor() { }

  ngOnInit() {
  }

}
