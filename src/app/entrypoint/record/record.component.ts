import {Component, OnInit} from '@angular/core';

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

    trade = [
        {label: '1', selected: false},
        {label: '2', selected: false},
        {label: '3', selected: false},
        {label: '4', selected: false}
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

