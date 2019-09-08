import {Injectable} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ScannerComponent} from './scanner.component';

@Injectable({
    providedIn: 'root'
})
export class ScannerService {

    constructor(private ngbModal: NgbModal) {

    }

    public open() {
        this.ngbModal.open(ScannerComponent, {size: 'xl', scrollable: true});
    }
}
