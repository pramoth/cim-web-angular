import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.scss']
})
export class SendComponent implements OnInit {

  phoneNumbers:any[]=[{}];

  constructor() { }

  ngOnInit() {
  }

  addNumber() {
    this.phoneNumbers.push({})
  }

  deleteNumber() {
    this.phoneNumbers = this.phoneNumbers.filter(e=>!e.checked);
  }
}
