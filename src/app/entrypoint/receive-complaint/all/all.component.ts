import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-all',
    templateUrl: './all.component.html',
    styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

    page = 1;
    items: { name: string, route: string }[] = [
        {name: 'Walk In', route: 'walk-in'},
        {name: 'ไปรษณีย์', route: 'post'},
        {name: 'Call Center', route: 'call-center'},
        {name: 'Internet', route: 'internet'},
        {name: 'ผผ.หยิบยก', route: 'own-motion'}];

    constructor() {
    }

    ngOnInit() {
    }

}
