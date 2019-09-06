import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-all',
    templateUrl: './all.component.html',
    styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

    page = 1;
    items: { name: string, route: string, complainant: string }[] = [
        {name: 'Walk In', route: 'walk-in', complainant: 'นายสมชาย ใจดี'},
        {name: 'ไปรษณีย์', route: 'post', complainant: 'นายจอห์น วิก'},
        {name: 'Call Center', route: 'call-center', complainant: 'นางสมหญิง ใจเด็ด'},
        {name: 'Internet', route: 'internet', complainant: 'นางสาวมะนาว โซดา'},
        {name: 'Mobile', route: 'mobile', complainant: 'นายรุ่งเรือง จิตใจดี'},
        {name: 'ผผ.หยิบยก', route: 'own-motion', complainant: 'นายเจ้าขุน ทอง'}];

    advanceSearch: boolean = false;
    result: any;

    constructor() {
    }

    ngOnInit() {
    }

}
