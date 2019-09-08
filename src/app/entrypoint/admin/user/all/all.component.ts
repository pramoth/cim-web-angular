import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  constructor(
      private modalService: NgbModal,
  ) { }
  userEdit:any;

  ngOnInit() {
  }

  openXl(content) { this.modalService.open(content, {size: 'xl'}); }

  addNewUser(new_user_content) {
    this.openXl(new_user_content)

  }

  user_info_show: boolean=false;



  onSearchUserInfo() {

    this.user_info_show = true;

  }

  addRightToUser(item: any, checked: boolean) {
    if(checked){
      let obj = {name:item.name,start:new Date,end:new Date}
      this.rightUserList.push(obj);
    }else{
      this.rightUserList.filter(f=>f.name!==item.name);
    }
  }

  onDeleteItem(item) {
    this.usersList = this.usersList.filter(e=>e.user_id!==item.user_id);
  }


  onEditUserInfo(edit_user_content, item){
    this.openXl(edit_user_content);
    this.userEdit = item;
  }

  rightUserList= [

  ];


  usersList = [
    {
      user_id:'00001',
      user_name:'62342342',
      fname:'koke',
      lname:'kikkok',
      department:'สำนักรัฐมนตรกระทรวงการคลัง',
    },
    {
      user_id:'00002',
      user_name:'62342342',
      fname:'koke',
      lname:'kikkok',
      department:'สำนักรัฐมนตรกระทรวงการคลัง',
    },
    {
      user_id:'00003',
      user_name:'62342342',
      fname:'koke',
      lname:'kikkok',
      department:'สำนักรัฐมนตรกระทรวงการคลัง',
    },
    {
      user_id:'00004',
      user_name:'62342342',
      fname:'koke',
      lname:'kikkok',
      department:'สำนักรัฐมนตรกระทรวงการคลัง',
    },
    {
      user_id:'00005',
      user_name:'62342342',
      fname:'koke',
      lname:'kikkok',
      department:'สำนักรัฐมนตรกระทรวงการคลัง',
    },
    {
      user_id:'00006',
      user_name:'62342342',
      fname:'koke',
      lname:'kikkok',
      department:'สำนักรัฐมนตรกระทรวงการคลัง',
    },
    {
      user_id:'00007',
      user_name:'62342342',
      fname:'koke',
      lname:'kikkok',
      department:'สำนักรัฐมนตรกระทรวงการคลัง',
    },
    {
      user_id:'00008',
      user_name:'62342342',
      fname:'koke',
      lname:'kikkok',
      department:'สำนักรัฐมนตรกระทรวงการคลัง',
    },
    {
      user_id:'00009',
      user_name:'62342342',
      fname:'koke',
      lname:'kikkok',
      department:'สำนักรัฐมนตรกระทรวงการคลัง',
    },
    {
      user_id:'000010',
      user_name:'62342342',
      fname:'koke',
      lname:'kikkok',
      department:'สำนักรัฐมนตรกระทรวงการคลัง',
    },
    {
      user_id:'000011',
      user_name:'62342342',
      fname:'koke',
      lname:'kikkok',
      department:'สำนักรัฐมนตรกระทรวงการคลัง',
    },

  ];

  groupUserList = [
    {
      id:"1",
      name:"ผู้ดูแลระบบ",
      checked:false,
    },{
      id:"2",
      name:"เจ้าหน้าที่ 1",
      checked:false,
    },{
      id:"3",
      name:"เจ้าหน้าที่ 2",
      checked:false,
    },{
      id:"4",
      name:"เจ้าหน้าที่ 3",
      checked:false,
    },{
      id:"5",
      name:"เจ้าหน้าที่ 4",
      checked:false,
    },{
      id:"6",
      name:"เจ้าหน้าที่ 5",
      checked:false,
    }/*,{
      id:"7",
      name:"เจ้าหน้าที่ 6",
      checked:false,
    },{
      id:"8",
      name:"เจ้าหน้าที่ 7",
      checked:false,
    }*/
  ];


}
