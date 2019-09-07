import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {DivisionService} from "../../../shared/division.service";
import {Division} from "../../../model/division";

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
    assignTo = false;
    departVal = 0;
    seletOrganiz= 0;
    divisionsList:Division[]=[];

    constructor(
        private modalService: NgbModal,
        private divisionService:DivisionService
    ) {
    }

    ngOnInit() {
        this.initDivision();
    }

    log(item: any) {
        console.log(item);
    }
    openXl(content) { this.modalService.open(content, {size: 'xl'}); }

    onSelectDepartment(depart,content){
        if(depart=="023"){
            this.openXl(content);
            this.assignTo = true

        }else{
            this.assignTo = false
        }

    }


    addResponsible(item) {
        let exist = this.responsibleofficerList.filter(e=>e.name==item.name).length;
        if(exist==0){
            this.responsibleofficerList.push(item);
        }
        this.employeeList = this.employeeList.filter(e=>e.name!==item.name);
    }

    removeResponsible(item) {
        this.responsibleofficerList = this.responsibleofficerList.filter(e => e.name !== item.name);
        this.employeeList.push(item);
    }

    initDivision(){
        this.divisionService.allDivisions.subscribe(resp=>{
            this.divisionsList = resp;
        })
    }

    employeeList = [
        {
            id:0,
            name:"สมชาย ใจดี",
            total_works:10,
            total_work_inprocess:4,
            header:false

        },
        {
            id:1,
            name:"สมปอง ดอง",
            total_works:5,
            total_work_inprocess:2,
            header:false

        },
        {
            id:2,
            name:"ญาญ่า หญิง",
            total_works:10,
            total_work_inprocess:9,
            header:false

        },
        {
            id:3,
            name:"จอห์น ชาวนา",
            total_works:20,
            total_work_inprocess:7,
            header:false

        },
        {
            id:4,
            name:"ชาติ ไซยา",
            total_works:13,
            total_work_inprocess:4,
            header:false

        },
        {
            id:0,
            name:"ชาติชาย ใจดี",
            total_works:10,
            total_work_inprocess:4,
            header:false

        },
        {
            id:1,
            name:"ประเทือง ใจ",
            total_works:5,
            total_work_inprocess:2,
            header:false

        },
        {
            id:2,
            name:"อารดา ระย",
            total_works:8,
            total_work_inprocess:1,
            header:false

        },
        {
            id:3,
            name:"บักหรรม น้อย",
            total_works:20,
            total_work_inprocess:15,
            header:false

        },
        {
            id:4,
            name:"จริงใจ ไหม",
            total_works:50,
            total_work_inprocess:2,
            header:false

        }
    ];

    responsibleofficerList=[

    ];




}

