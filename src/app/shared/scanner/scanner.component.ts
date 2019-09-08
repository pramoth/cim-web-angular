import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-scanner',
    templateUrl: './scanner.component.html',
    styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent implements OnInit {
    scanImages: string[];

    constructor(public activeModal: NgbActiveModal) {
    }

    ngOnInit() {
    }

    startScan(): void {
        this.scanImages = ['scan1.jpg', 'scan2.jpg'];
    }

}
