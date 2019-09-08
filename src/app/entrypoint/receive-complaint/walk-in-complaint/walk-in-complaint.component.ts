import {Component, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-walk-in-complaint',
    templateUrl: './walk-in-complaint.component.html',
    styleUrls: ['./walk-in-complaint.component.scss']
})
export class WalkInComplaintComponent implements OnInit {

    complaintType: string = 'Walk In';

    complainantType: 'thai' | 'foreign' | 'agent' | 'group';

    complainants: any[] = [{complainantType: null, subComplainants: [{}]}];

    subComplainants: any[];

    accusedDepartments: any[] = [{}];

    constructor(private toastr: ToastrService) {
    }

    ngOnInit() {
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

    save(): void {
        console.log(this.toastr)
        this.toastr.success('บันทึกเสร็จสิ้น','Success')
    }

}
