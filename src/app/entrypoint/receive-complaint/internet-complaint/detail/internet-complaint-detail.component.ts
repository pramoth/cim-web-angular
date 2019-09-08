import {Component, OnInit} from '@angular/core';
import {ComfirmDialogComponent} from '../../../../shared/comfirm-dialog/comfirm-dialog.component';
import {from} from 'rxjs';
import {filter} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-internet-complaint',
    templateUrl: './internet-complaint-detail.component.html',
    styleUrls: ['./internet-complaint-detail.component.scss']
})
export class InternetComplaintDetailComponent implements OnInit {

    complaintType: string = 'Internet';

    complainantType: 'thai' | 'foreign' | 'agent' | 'group';

    complainants: any[] = [{complainantType: null, subComplainants: [{}]}];

    subComplainants: any[];

    accusedDepartments: any[] = [{}];

    constructor(private toastr: ToastrService, private ngbModal: NgbModal, private router: Router, private actRoute: ActivatedRoute) {
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
        modalRef.componentInstance.content = 'ยืนยันการ' + innerText;
        from(modalRef.result)
            .pipe(filter(e => !!e))
            .subscribe(e => {
                //TODO do someting
                this.router.navigate(['..'], {relativeTo: this.actRoute});
                this.toastr.success('บันทึกเสร็จสิ้น', 'Success');
            }, dismis => {
            });
    }
}
