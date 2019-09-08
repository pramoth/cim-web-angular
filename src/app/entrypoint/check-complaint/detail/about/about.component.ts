import {Component, OnInit} from '@angular/core';
import {ScannerService} from '../../../../shared/scanner/scanner.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    subjects: any[] = [{}];
    complainants: any[] = [{complainantType: null, subComplainants: [{}]}];
    complainantType: 'thai' | 'foreign' | 'agent' | 'group';
    data: number[];
    accusedDepartments: any[] = [{}];
    addressComplaint: any[] = [{}];
    addressRespondent: any[] = [{}];

    constructor(private scanner: ScannerService) {
    }

    ngOnInit() {
        this.data = [1, 2, 3, 4, 5, 6, 7];
    }

    deleteRow(i) {
        const index = this.data.indexOf(this.data.length);
        this.data.splice(index, 1);
    }

    addSubject() {
        this.subjects.push({});
    }

    deleteSubject() {
        this.subjects = this.subjects.filter(e => !e.checked);
    }

    addComplainant() {
        this.complainants.push({complainantType: null, subComplainants: [{}]});
    }

    deleteComplainant() {
        this.complainants = this.complainants.filter(e => !e.checked);
    }

    addSubComplainant(complainant: any) {
        complainant.subComplainants.push({});
    }

    deleteSubComplainant(complainant: any) {
        complainant.subComplainants = complainant.subComplainants.filter(e => !e.checked);
    }

    addDepartment() {
        this.accusedDepartments.push({});
    }

    deleteDepartment() {
        this.accusedDepartments = this.accusedDepartments.filter(e => !e.checked);
    }

    addAddressComplaint() {
        this.addressComplaint.push({});
    }

    deleteAddressComplaint() {
        this.addressComplaint = this.addressComplaint.filter(e => !e.checked);
    }

    addAddressRespondent() {
        this.addressRespondent.push({});
    }

    deleteAddressRespondent() {
        this.addressRespondent = this.addressRespondent.filter(e => !e.checked);
    }

    scan() {
        this.scanner.open();
    }
}
