import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-sign',
    templateUrl: './sign.component.html',
    styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {
    blackNumer: string;

    constructor() {
    }

    ngOnInit() {
    }

    search() {
        this.blackNumer = '02001/2562';
    }

    clear() {
        this.blackNumer = undefined;
    }
}
