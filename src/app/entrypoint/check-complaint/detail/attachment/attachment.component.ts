import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-attachment',
    templateUrl: './attachment.component.html',
    styleUrls: ['./attachment.component.scss']
})
export class AttachmentComponent implements OnInit {

    data: { id: number }[] = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}, {id: 9}, {id: 10}, {id: 11}];


    constructor() {
    }

    ngOnInit() {
    }

    deleteRow(id) {
        for (let i = 0; i < this.data.length; ++i) {
            if (this.data[i].id === id) {
                this.data.splice(i, 1);
            }
        }
    }
}

