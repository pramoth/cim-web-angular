import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
    pages: any = {id: 10};
    page = 1;

    data: { username: string, nameOfuser: string, dateAccess: string, ip: string }[] = [{
        username: 'admin',
        nameOfuser: 'admin',
        dateAccess: '8/10/2562',
        ip: '171.7.35.229'
    }, {
        username: 'anonymous',
        nameOfuser: 'นายฐนภณ ธนวชิรนนท์',
        dateAccess: '8/10/2562',
        ip: '10.1.210.6'
    }, {
        username: 'anonymous',
        nameOfuser: 'นายฐนภณ ธนวชิรนนท์',
        dateAccess: '8/10/2562',
        ip: '10.1.210.6'
    },
        {
            username: 'anonymous',
            nameOfuser: 'นายฐนภณ ธนวชิรนนท์',
            dateAccess: '8/10/2562',
            ip: '10.1.210.6'
        },
        {
            username: 'anonymous',
            nameOfuser: 'นายฐนภณ ธนวชิรนนท์',
            dateAccess: '8/10/2562',
            ip: '10.1.210.6'
        },
        {
            username: 'anonymous',
            nameOfuser: 'นายฐนภณ ธนวชิรนนท์',
            dateAccess: '8/10/2562',
            ip: '10.1.210.6'
        },
    ];

    constructor() {
    }

    ngOnInit() {
    }
    callPage(value) {
        this.pages.id = value;
        return value
    }

}
