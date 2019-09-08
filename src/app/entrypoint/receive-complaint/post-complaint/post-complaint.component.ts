import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-post-complaint',
    templateUrl: './post-complaint.component.html',
    styleUrls: ['./post-complaint.component.scss']
})
export class PostComplaintComponent implements OnInit {
    pages: any = {id: 10};

    page = 1;
    items: { route: string, complainant: string }[] = [
        {route: 'post', complainant: 'นายสมชาย ใจดี'},
        {route: 'post', complainant: 'นายจอห์น วิก'},
        {route: 'post', complainant: 'นางสมหญิง ใจเด็ด'},
        {route: 'post', complainant: 'นางสาวมะนาว โซดา'},
        {route: 'post', complainant: 'นายรุ่งเรือง จิตใจดี'},
        {route: 'post', complainant: 'นายเจ้าขุน ทอง'},
        {route: 'internet', complainant: 'นางสมหญิง ใจเด็ด'},
        {route: 'internet', complainant: 'นางสาวมะนาว โซดา'},
        {route: 'internet', complainant: 'นายรุ่งเรือง จิตใจดี'},
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
