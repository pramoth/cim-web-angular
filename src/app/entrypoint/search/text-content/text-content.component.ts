import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-text-content',
  templateUrl: './text-content.component.html',
  styleUrls: ['./text-content.component.scss']
})
export class TextContentComponent implements OnInit {

  @Input()
  items: { name: string, route: string, complainant: string ,detail:string}[] = [];

  result: any;

  constructor() { }

  ngOnInit() {
  }

}
