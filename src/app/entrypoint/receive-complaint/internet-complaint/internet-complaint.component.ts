import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-internet-complaint',
  templateUrl: './internet-complaint.component.html',
  styleUrls: ['./internet-complaint.component.scss']
})
export class InternetComplaintComponent implements OnInit {

  page = 1;
  items: { route: string, complainant: string }[] = [
    { route: 'internet', complainant: 'นายสมชาย ใจดี'},
    { route: 'internet', complainant: 'นายจอห์น วิก'},
    { route: 'internet', complainant: 'นางสมหญิง ใจเด็ด'},
    { route: 'internet', complainant: 'นางสาวมะนาว โซดา'},
    { route: 'internet', complainant: 'นายรุ่งเรือง จิตใจดี'},
    { route: 'internet', complainant: 'นายเจ้าขุน ทอง'}];

  constructor() { }

  ngOnInit() {
  }

  types: any = [10, 25, 50, 100];
  order: any = {id: 10};
  callPage(value) {
    this.order.type = value;
    return value
  }

}
