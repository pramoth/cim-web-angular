import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-walk-in-complaint',
    templateUrl: './walk-in-complaint.component.html',
    styleUrls: ['./walk-in-complaint.component.scss']
})
export class WalkInComplaintComponent implements OnInit {

    complaintType: string = 'Walk In';

    complainantType: 'thai' | 'foreign' | 'agent' | 'group';

    subComplainants: string[] = [''];

    accusedDepartments: string[] = [''];

    constructor() {
    }

    ngOnInit() {
    }

    addSubComplainant() {
        this.subComplainants.push('');
    }

    deleteSubComplainant() {
        this.subComplainants.pop();
    }

    addDepartment() {
        this.accusedDepartments.push('');
    }

    deleteDepartment() {
        this.accusedDepartments.pop();
    }

}
