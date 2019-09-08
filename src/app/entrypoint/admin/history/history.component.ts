import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {


    data: { username: string, nameOfuser: string, dateAccess: string, ip: string }[] = [{
        username: '',
        nameOfuser: '',
        dateAccess: '',
        ip: ''
    },
      {
        username: '',
        nameOfuser: '',
        dateAccess: '',
        ip: ''
      },
      {
        username: '',
        nameOfuser: '',
        dateAccess: '',
        ip: ''
      },
      {
        username: '',
        nameOfuser: '',
        dateAccess: '',
        ip: ''
      },
      {
        username: '',
        nameOfuser: '',
        dateAccess: '',
        ip: ''
      },
      {
        username: '',
        nameOfuser: '',
        dateAccess: '',
        ip: ''
      },{
        username: '',
        nameOfuser: '',
        dateAccess: '',
        ip: ''
      }
      ];

    constructor() {
    }

    ngOnInit() {
    }

}
