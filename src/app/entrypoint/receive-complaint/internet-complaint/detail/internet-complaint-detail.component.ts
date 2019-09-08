import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-internet-complaint',
  templateUrl: './internet-complaint-detail.component.html',
  styleUrls: ['./internet-complaint-detail.component.scss']
})
export class InternetComplaintDetailComponent implements OnInit {

  complaintType: string = 'Internet';

  complainantType: 'thai' | 'foreign' | 'agent' | 'group';

  complainants: any[] = [{complainantType: null, subComplainants: [{}]}];

  subComplainants: any[];

  accusedDepartments: any[] = [{}];

  constructor() { }

  ngOnInit() {
  }

  addComplainant() {
    this.complainants.push({complainantType: null, subComplainants: [{}]});
  }

  deleteComplainant() {
    this.complainants.pop();
  }

  addSubComplainant(complainant: any) {
    complainant.subComplainants.push({});
  }

  deleteSubComplainant(complainant: any) {
    complainant.subComplainants.pop();
  }

  addDepartment() {
    this.accusedDepartments.push({});
  }

  deleteDepartment() {
    this.accusedDepartments.pop();
  }

}
