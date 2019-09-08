import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-post-complaint',
    templateUrl: './post-complaint-detail.component.html',
    styleUrls: ['./post-complaint-detail.component.scss']
})
export class PostComplaintDetailComponent implements OnInit {

    complaintType: string = 'ไปรษณีย์';

    complainantType: 'thai' | 'foreign' | 'agent' | 'group';

    subjects: any[] = [{}];

    complainants: any[] = [{complainantType: null, subComplainants: [{}]}];

    subComplainants: any[];

    accusedDepartments: any[] = [{}];

    sendAddresses: any[] = [{}];

    constructor() {
    }

    ngOnInit() {
    }

    addSubject() {
        this.subjects.push({});
    }

    deleteSubject() {
        this.subjects.pop();
    }

    addComplainant() {
        this.complainants.push({complainantType: null, subComplainants: [{}]});
    }

    deleteComplainant() {
        this.complainants.pop();
    }

    addSubComplainant(complainant: any) {
        complainant.subComplainants.push({});
    }

    deleteSubComplainant(complainant: any) {
        complainant.subComplainants.pop();
    }

    addDepartment() {
        this.accusedDepartments.push({});
    }

    deleteDepartment() {
        this.accusedDepartments.pop();
    }

    addSendAddress() {
        this.sendAddresses.push({});
    }

    deleteSendAddress() {
        this.sendAddresses.pop();
    }
}
