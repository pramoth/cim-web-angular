import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-complaint',
  templateUrl: './mobile-complaint.component.html',
  styleUrls: ['./mobile-complaint.component.scss']
})
export class MobileComplaintComponent implements OnInit {

  page = 1;
  items: { route: string, complainant: string }[] = [
    { route: 'mobile', complainant: 'นายสมชาย ใจดี'},
    { route: 'mobile', complainant: 'นายจอห์น วิก'},
    { route: 'mobile', complainant: 'นางสมหญิง ใจเด็ด'},
    { route: 'mobile', complainant: 'นางสาวมะนาว โซดา'},
    { route: 'mobile', complainant: 'นายรุ่งเรือง จิตใจดี'},
    { route: 'mobile', complainant: 'นายเจ้าขุน ทอง'},
    { route: 'mobile', complainant: 'นางสาวมะนาว โซดา'},
    { route: 'mobile', complainant: 'นายรุ่งเรือง จิตใจดี'},
    { route: 'mobile', complainant: 'นายเจ้าขุน ทอง'},
    { route: 'mobile', complainant: 'นางสาวมะนาว โซดา'},
    { route: 'mobile', complainant: 'นายรุ่งเรือง จิตใจดี'},
    { route: 'mobile', complainant: 'นายเจ้าขุน ทอง'},
    { route: 'mobile', complainant: 'นางสาวมะนาว โซดา'},
    { route: 'mobile', complainant: 'นายรุ่งเรือง จิตใจดี'},
    { route: 'mobile', complainant: 'นายเจ้าขุน ทอง'}];

  constructor() { }

  ngOnInit() {
  }

  pages: any = {id: 10};
  callPage(value) {
    this.pages.id = value;
    return value
  }

}
