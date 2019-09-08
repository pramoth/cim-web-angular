import {Component, OnInit} from '@angular/core';
import {ScannerService} from '../../../../shared/scanner/scanner.service';

@Component({
    selector: 'app-receive-doc',
    templateUrl: './receive-doc.component.html',
    styleUrls: ['./receive-doc.component.scss']
})
export class ReceiveDocComponent implements OnInit {
    data: { id: number }[] = [{id: 1}, {id: 2}, {id: 3}, {id: 4},
        {id: 5}, {id: 6}, {id: 7}, {id: 8}, {id: 9}, {id: 10}, {id: 11}];

    constructor(private scanner: ScannerService) {
    }

    ngOnInit() {

    }

    deleteRow(id) {
        for (let i = 0; i < this.data.length; ++i) {
            if (this.data[i].id === id) {
                this.data.splice(i, 1);
            }
        }
    }

    scan() {
        this.scanner.open();
    }
}
