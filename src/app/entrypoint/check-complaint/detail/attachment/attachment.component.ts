import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-attachment',
    templateUrl: './attachment.component.html',
    styleUrls: ['./attachment.component.scss']
})
export class AttachmentComponent implements OnInit {

    data: number[];


    constructor() {
    }

    ngOnInit() {
        this.data= [1,2,3,4,5,6,7]
    }

    deleteRow(i) {
        const index = this.data.indexOf(this.data.length);
        this.data.splice(index, 1);
    }
}

