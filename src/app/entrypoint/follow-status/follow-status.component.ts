import {Component, OnInit} from '@angular/core';
import {isEmpty} from "rxjs/operators";

@Component({
    selector: 'app-follow-status',
    templateUrl: './follow-status.component.html',
    styleUrls: ['./follow-status.component.scss']
})
export class FollowStatusComponent implements OnInit {
    show: boolean = false;
    blackNumber;
    data:any = {
        dateOfComplaint: "1/8/2562",
        timeOfComplaint: "30/7/2562",
        numberOfComplaint:"7753",
        bookNumber: "4451",
        time: "18.03",
        date: "1/8/2562",
        nameOfComplaint:"ธนชัย",
        nameOfComplained: "จันทร์เจริญ"
    }

    constructor() {
    }

    ngOnInit() {
    }

    openDetail() {
        this.show = true;

    }

    closeDetail() {
        this.show = false;
    }

    getBlackNumber(number) {
        this.blackNumber = number
    }

}
