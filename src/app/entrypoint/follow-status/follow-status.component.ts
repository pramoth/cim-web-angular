import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-follow-status',
    templateUrl: './follow-status.component.html',
    styleUrls: ['./follow-status.component.scss']
})
export class FollowStatusComponent implements OnInit {
    show: boolean = false;
    getnumber = "";
    blackandred: any = "001/2562";
    data: { date: string, completedate: string, amountdate: string, step: string, operator: string }[] = [{
        date: "31/05/2561",
        completedate: " ",
        amountdate: "",
        step: "รับเรื่องร้องเรียน",
        operator: "นางสาวรศิพร เสวกพันธ์"
    }, {
        date: "04/06/2561",
        completedate: "04/06/2561",
        amountdate: "",
        step: "ส่งสารรับผิดชอบ",
        operator: "นายทิฆมพร ยะลา"
    }, {
        date: "12/06/2561",
        completedate: " ",
        amountdate: "",
        step: "มอบหมายรับผิดชอบ",
        operator: "นายทิฆมพร ยะลา"
    }, {
        date: "12/06/2561",
        completedate: "12/06/2561",
        amountdate: "",
        step: "ส่งสำนักงานรับผิดชอบ",
        operator: "นายทิฆมพร ยะลา"
    }, {
        date: "12/06/2561",
        completedate: "12/06/2561",
        amountdate: "",
        step: "ส่งสำนักงานรับผิดชอบ",
        operator: "นายทิฆมพร ยะลา"
    }, {
        date: "18/06/2561",
        completedate: "18/06/2561",
        amountdate: "",
        step: "ส่งสำนักงานรับผิดชอบ",
        operator: "นายทิฆมพร ยะลา"
    }, {
        date: "06/07/2561",
        completedate: " ",
        amountdate: "",
        step: "มอบหมายผู็รับผิดชอบ",
        operator: "นายกีรป กฤตธีรานนท์"
    }, {
        date: "06/07/2561",
        completedate: " ",
        amountdate: "",
        step: "แจ้งความคืบหน้า",
        operator: "นางสาวรุ่งทิพย์ ปาระมีแจ้"
    }, {
        date: "06/07/2561",
        completedate: " ",
        amountdate: "",
        step: "ให้หน่วยงานชี้แจง",
        operator: "นางสาวรุ่งทิพย์ ปาระมีแจ้"
    }, {
        date: "11/07/2561",
        completedate: " ",
        amountdate: "",
        step: "ให้หน่วยงานชี้แจง",
        operator: "นางสาวรุ่งทิพย์ ปาระมีแจ้"
    }, {
        date: "18/07/2561",
        completedate: " ",
        amountdate: "",
        step: "ได้รับหนังสือเพิ่ม",
        operator: "นายฐนภณ ธนวชิรนนท์"
    }, {
        date: "11/07/2561",
        completedate: " ",
        amountdate: "",
        step: "ได้รับหนังสือเพิ่ม",
        operator: "นายฐนภณ ธนวชิรนนท์์"
    }, {
        date: "18/07/2561",
        completedate: " ",
        amountdate: "",
        step: "ได้รับหนังสือเพิ่ม",
        operator: "นายฐนภณ ธนวชิรนนท์"
    }, {
        date: "23/07/2561",
        completedate: " ",
        amountdate: "",
        step: "ได้รับหนังสือเพิ่ม",
        operator: "นายฐนภณ ธนวชิรนนท์"
    }, {
        date: "10/10/2561",
        completedate: " ",
        amountdate: "",
        step: "เสนอผู้ตรวจการแผนดิน",
        operator: "นางสาวพีรัญญา โพธิเสถียร"
    }, {
        date: "30/10/2561",
        completedate: " ",
        amountdate: "",
        step: "ยุติเรื่อง/แจ้งผลการวินิจฉัย",
        operator: "นายเฉลิมพล ขุนเมือง"
    }, {
        date: "02/11/2561",
        completedate: " ",
        amountdate: "",
        step: "ยุติเรื่อง/แจ้งผลการวินิจฉัย",
        operator: "นางสาวจุฑารัตน์ สุขสละ"
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
