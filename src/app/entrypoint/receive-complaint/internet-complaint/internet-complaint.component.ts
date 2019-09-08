import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-internet-complaint',
    templateUrl: './internet-complaint.component.html',
    styleUrls: ['./internet-complaint.component.scss']
})
export class InternetComplaintComponent implements OnInit {
    pages: any = {id: 10};

    page = 1;
    items: { route: string, complainant: string }[] = [
        {route: 'internet', complainant: 'นายสมชาย ใจดี'},
        {route: 'internet', complainant: 'นายจอห์น วิก'},
        {route: 'internet', complainant: 'นางสมหญิง ใจเด็ด'},
        {route: 'internet', complainant: 'นางสาวมะนาว โซดา'},
        {route: 'internet', complainant: 'นายรุ่งเรือง จิตใจดี'},
        {route: 'internet', complainant: 'นายเจ้าขุน ทอง'},
        {route: 'internet', complainant: 'นางสมหญิง ใจเด็ด'},
        {route: 'internet', complainant: 'นางสาวมะนาว โซดา'},
        {route: 'internet', complainant: 'นายรุ่งเรือง จิตใจดี'},
        {route: 'internet', complainant: 'นางสมหญิง ใจเด็ด'},
        {route: 'internet', complainant: 'นางสาวมะนาว โซดา'},
        {route: 'internet', complainant: 'นายรุ่งเรือง จิตใจดี'},
        {route: 'internet', complainant: 'นางสมหญิง ใจเด็ด'},
        {route: 'internet', complainant: 'นางสาวมะนาว โซดา'},
        {route: 'internet', complainant: 'นายรุ่งเรือง จิตใจดี'}];

    constructor() {
    }

    ngOnInit() {
    }


    callPage(value) {
        this.pages.id = value;
        return value
    }

}
