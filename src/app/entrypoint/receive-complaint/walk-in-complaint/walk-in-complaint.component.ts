import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-walkin-complaint',
    templateUrl: './walk-in-complaint.component.html',
    styleUrls: ['./walk-in-complaint.component.scss']
})
export class WalkinComplaintComponent implements OnInit {

    pages: any = {id: 10};
    page = 1;
    items: { route: string, complainant: string }[] = [
        {route: 'call-center', complainant: 'นายสมชาย ใจดี'},
        {route: 'call-center', complainant: 'นายจอห์น วิก'},
        {route: 'call-center', complainant: 'นางสมหญิง ใจเด็ด'},
        {route: 'call-center', complainant: 'นางสาวมะนาว โซดา'},
        {route: 'call-center', complainant: 'นายรุ่งเรือง จิตใจดี'},
        {route: 'call-center', complainant: 'นายเจ้าขุน ทอง'},
        {route: 'call-center', complainant: 'นายเจ้าขุน ทอง'},
        {route: 'call-center', complainant: 'นางสาวมะนาว โซดา'},
        {route: 'call-center', complainant: 'นายรุ่งเรือง จิตใจดี'},
        {route: 'call-center', complainant: 'นายเจ้าขุน ทอง'},
        {route: 'call-center', complainant: 'นางสาวมะนาว โซดา'},
        {route: 'call-center', complainant: 'นายรุ่งเรือง จิตใจดี'},
        {route: 'call-center', complainant: 'นายเจ้าขุน ทอง'},
        {route: 'call-center', complainant: 'นางสาวมะนาว โซดา'},
        {route: 'call-center', complainant: 'นายรุ่งเรือง จิตใจดี'},
        {route: 'call-center', complainant: 'นายเจ้าขุน ทอง'},
        {route: 'call-center', complainant: 'นางสาวมะนาว โซดา'},
        {route: 'call-center', complainant: 'นายรุ่งเรือง จิตใจดี'},
        {route: 'call-center', complainant: 'นายเจ้าขุน ทอง'}];

    constructor() {
    }

    ngOnInit() {
    }

    callPage(value) {
        this.pages.id = value;
        return value
    }


}
