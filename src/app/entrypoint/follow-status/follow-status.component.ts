import {Component, OnInit} from '@angular/core';
import {stat} from "fs";

@Component({
    selector: 'app-follow-status',
    templateUrl: './follow-status.component.html',
    styleUrls: ['./follow-status.component.scss']
})
export class FollowStatusComponent implements OnInit {
    show: boolean = false;
    getnumber = "";
    blackandred: any = "001/2562";
    data: { date: string, completedate: string, amountdate: string, step: string, operator: string, detail: string }[] = [{
        date: "31/05/2561",
        completedate: " ",
        amountdate: "",
        step: "รับเรื่องร้องเรียน",
        operator: "นางสาวรศิพร เสวกพันธ์",
        detail: ""
    }, {
        date: "04/06/2561",
        completedate: "04/06/2561",
        amountdate: "1",
        step: "ส่งสารรับผิดชอบ",
        operator: "นายทิฆมพร ยะลา",
        detail: ""
    }, {
        date: "12/06/2561",
        completedate: " ",
        amountdate: "",
        step: "มอบหมายรับผิดชอบ",
        operator: "นายทิฆมพร ยะลา",
        detail: ""
    }, {
        date: "12/06/2561",
        completedate: "12/06/2561",
        amountdate: "1",
        step: "ส่งสำนักงานรับผิดชอบ",
        operator: "นายทิฆมพร ยะลา",
        detail: ""
    }, {
        date: "12/06/2561",
        completedate: "12/06/2561",
        amountdate: "1",
        step: "ส่งสำนักงานรับผิดชอบ",
        operator: "นายทิฆมพร ยะลา",
        detail: ""
    }, {
        date: "18/06/2561",
        completedate: "18/06/2561",
        amountdate: "1",
        step: "ส่งสำนักงานรับผิดชอบ",
        operator: "นายทิฆมพร ยะลา",
        detail: ""
    }, {
        date: "06/07/2561",
        completedate: " ",
        amountdate: "",
        step: "มอบหมายผู็รับผิดชอบ",
        operator: "นายกีรป กฤตธีรานนท์",
        detail: ""
    }, {
        date: "06/07/2561",
        completedate: " ",
        amountdate: "",
        step: "แจ้งความคืบหน้า",
        operator: "นางสาวรุ่งทิพย์ ปาระมีแจ้",
        detail: ""
    }, {
        date: "06/07/2561",
        completedate: " ",
        amountdate: "",
        step: "ให้หน่วยงานชี้แจง",
        operator: "นางสาวรุ่งทิพย์ ปาระมีแจ้"
        , detail: ""
    }, {
        date: "11/07/2561",
        completedate: " ",
        amountdate: "",
        step: "ให้หน่วยงานชี้แจง",
        operator: "นางสาวรุ่งทิพย์ ปาระมีแจ้",
        detail: ""
    }, {
        date: "18/07/2561",
        completedate: " ",
        amountdate: "",
        step: "ได้รับหนังสือเพิ่ม",
        operator: "นายฐนภณ ธนวชิรนนท์",
        detail: ""
    }, {
        date: "11/07/2561",
        completedate: " ",
        amountdate: "",
        step: "ได้รับหนังสือเพิ่ม",
        operator: "นายฐนภณ ธนวชิรนนท์์",
        detail: ""
    }, {
        date: "18/07/2561",
        completedate: " ",
        amountdate: "",
        step: "ได้รับหนังสือเพิ่ม",
        operator: "นายฐนภณ ธนวชิรนนท์",
        detail: ""
    }, {
        date: "23/07/2561",
        completedate: " ",
        amountdate: "",
        step: "ได้รับหนังสือเพิ่ม",
        operator: "นายฐนภณ ธนวชิรนนท์",
        detail: ""
    }, {
        date: "10/10/2561",
        completedate: " ",
        amountdate: "",
        step: "เสนอผู้ตรวจการแผนดิน",
        operator: "นางสาวพีรัญญา โพธิเสถียร",
        detail: ""
    }, {
        date: "30/10/2561",
        completedate: " ",
        amountdate: "",
        step: "ยุติเรื่อง/แจ้งผลการวินิจฉัย",
        operator: "นายเฉลิมพล ขุนเมือง",
        detail: ""
    }, {
        date: "02/11/2561",
        completedate: " ",
        amountdate: "",
        step: "ยุติเรื่อง/แจ้งผลการวินิจฉัย",
        operator: "นางสาวจุฑารัตน์ สุขสละ",
        detail: ""
    }, {
        date: "19/08/2562",
        completedate: " ",
        amountdate: "",
        step: "ส่งสำนักรับผิดชอบ",
        operator: "จีเนียส-ทรี",
        detail: "มอบหมายส่วนงานรับผิดชอบเรื่องราวร้องเรียน 00650/24561 ให้สำนักงานตรวจสอบเรื่องร้องเรียน"
    }, {
        date: "07/09/2562",
        completedate: " ",
        amountdate: "",
        step: "ขอข้อมูลเพิ่มเติม",
        operator: "จีเนียส-ทรี",
        detail: "ลงทำเบียนหนังสื่อออกภายนอก 0028/2562 (ผผ 19/0025)"
    }, {
        date: "07/09/2562",
        completedate: " ",
        amountdate: "",
        step: "ขอข้อมูลเพิ่มเติม",
        operator: "จีเนียส-ทรี",
        detail: "ลงทำเบียนหนังสื่อออกภายนอก 0029/2562 (ผผ 19/0026)"
    }, {
        date: "07/09/2562",
        completedate: " ",
        amountdate: "",
        step: "ขอข้อมูลเพิ่มเติม",
        operator: "จีเนียส-ทรี",
        detail: "รับหนังสือเพิ่ม 00650/2561 ข้อมูลเพิ่มเติมเรื่องร้องเรียน"
    }
    ];

    constructor() {
    }

    ngOnInit() {
    }

    openDetail(redandblack) {
        this.show = true;
        this.getnumber = redandblack;
    }

    closeDetail() {
        this.show = false;
        this.getnumber = '';
    }


}
