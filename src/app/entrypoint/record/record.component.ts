import {
    Component,
    OnInit
} from '@angular/core';

@Component({
    selector: 'app-record',
    templateUrl: './record.component.html',
    styleUrls: ['./record.component.scss']
})
export class RecordComponent implements OnInit {

    complainNumber: string
    dateInput: string
    numberInput: string
    present: any

    isTrade: boolean = false
    checkAllTrades: boolean = false
    trade = [{
        label: '1',
        selected: "00001/2562"
    },
        {
            label: '2',
            selected: "00773/2562"
        },
        {
            label: '3',
            selected: "00787/2562"
        },
        {
            label: '4',
            selected: "00963/2560"
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

    clearInput() {
        this.complainNumber = ''
        this.dateInput = ''
        this.numberInput = ''
        this.present = ''
    }

    changeTradesByCategory(event) {
        if (event.target.name == 'trades') {
            this.isTrade = true
        }

        if (this.isTrade && this.checkAllTrades) {
            event.target.checked = true
        }
    }

    allTrades(event) {
        const checked = event.target.checked;
        this.trade.forEach(item => item.selected = checked);
    }
}
