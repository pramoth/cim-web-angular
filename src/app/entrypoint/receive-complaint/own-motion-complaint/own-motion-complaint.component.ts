import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-own-motion-complaint',
    templateUrl: './own-motion-complaint.component.html',
    styleUrls: ['./own-motion-complaint.component.scss']
})
export class OwnMotionComplaintComponent implements OnInit {

    complaintType: string = 'Own Motion';

    accusedDetail: {
        institution: string,
        department: string,
        ministry: string,
        headPosition: string,
        title: string,
        name: string,
        lastName: string,
        addressNo: string,
        village: string,
        moo: string,
        alley: string,
        road: string,
        subDistrict: string,
        district: string,
        province: string,
        postCode: string
    } = {
        institution: 'สำนักงานผู้ตรวจการแผ่นดิน',
        department: '',
        ministry: '',
        headPosition: 'เลขาธิการสำนักงานผู้ตรวจการแผ่นดิน',
        title: '',
        name: '',
        lastName: '',
        addressNo: '120',
        village: '',
        moo: '3',
        alley: '',
        road: 'แจ้งวัฒนะ',
        subDistrict: 'ทุ่งสองห้อง',
        district: 'หลักสี่',
        province: 'กรุงเทพมหานคร',
        postCode: '10210'
    };

    constructor() {
    }

    ngOnInit() {
    }

}
