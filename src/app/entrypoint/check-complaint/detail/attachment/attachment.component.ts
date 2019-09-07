import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-attachment',
    templateUrl: './attachment.component.html',
    styleUrls: ['./attachment.component.scss']
})
export class AttachmentComponent implements OnInit {

    data: number[];
    id: number;

    constructor() {
    }

    ngOnInit() {
        this.data = [1,1,1,1,1,1,1]
    }

    deleteRow(d) {
        const index = this.data.indexOf(this.data.length);
        this.data.splice(index, 1);
        console.log("id "+ this.data.values())
    }
}

