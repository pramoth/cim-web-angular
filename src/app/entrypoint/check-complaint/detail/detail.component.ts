import {Component, OnInit} from '@angular/core';
import {AuthenService} from "../../../authen.service";
import {Authority} from "../../../model/user";

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

    moreThanDeputy:Authority[]=['DEPUTY_SECRETARY','SECRETARY','OMBUDSMAN'];
    investigation:Authority[]=['INVESTIGATION','INVESTIGATION_1','INVESTIGATION_2','INVESTIGATION_3','INVESTIGATION_4','INVESTIGATION_GOV','LEGAL'];

    constructor(public authenService:AuthenService) {
    }

    ngOnInit() {
    }

}
