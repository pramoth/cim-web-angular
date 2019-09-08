import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-call-center-complaint',
  templateUrl: './call-center-complaint-detail.component.html',
  styleUrls: ['./call-center-complaint-detail.component.scss']
})
export class CallCenterComplaintDetailComponent implements OnInit {

  complaintType: string = 'Call Center';

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
