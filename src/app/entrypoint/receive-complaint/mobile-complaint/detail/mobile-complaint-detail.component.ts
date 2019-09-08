import {Component, OnInit} from '@angular/core';
import {ComfirmDialogComponent} from '../../../../shared/comfirm-dialog/comfirm-dialog.component';
import {from} from 'rxjs';
import {filter} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-mobile-complaint',
    templateUrl: './mobile-complaint-detail.component.html',
    styleUrls: ['./mobile-complaint-detail.component.scss']
})
export class MobileComplaintDetailComponent implements OnInit {

    complaintType: string = 'Mobile Application';

    complainantType: 'thai' | 'foreign' | 'agent' | 'group';

    constructor(private toastr: ToastrService, private ngbModal: NgbModal, private router: Router, private actRoute: ActivatedRoute) {
    }

    ngOnInit() {
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
