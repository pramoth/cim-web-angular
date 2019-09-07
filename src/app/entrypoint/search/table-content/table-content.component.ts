import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table-content',
  templateUrl: './table-content.component.html',
  styleUrls: ['./table-content.component.scss']
})
export class TableContentComponent implements OnInit {


  @Input()
  items: { name: string, route: string, complainant: string ,detail:string}[] = [];
  @Input()
  page:number;
  result: any;

  constructor() { }

  ngOnInit() {
  }

}
