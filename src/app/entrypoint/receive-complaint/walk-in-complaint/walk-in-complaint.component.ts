import {Component, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ComfirmDialogComponent} from '../../../shared/comfirm-dialog/comfirm-dialog.component';
import {from} from 'rxjs';
import {filter} from 'rxjs/operators';

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

    constructor(private toastr: ToastrService, private ngbModal: NgbModal) {
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

    save(innerText: string): void {
        const modalRef = this.ngbModal.open(ComfirmDialogComponent);
        modalRef.componentInstance.content = 'ยืนยันการ'+innerText;
        from(modalRef.result)
            .pipe(filter(e => !!e))
            .subscribe(e => {
                this.toastr.success('บันทึกเสร็จสิ้น', 'Success');
            }, dismis => {
            });
    }

}
