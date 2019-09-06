import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conclude',
  templateUrl: './conclude.component.html',
  styleUrls: ['./conclude.component.scss']
})
export class ConcludeComponent implements OnInit {

   data1={
       isMatra1:false,
       isMatra2:false,
       isMatra3:false,
       isMatra4:false,
       isMatra5:false,
       isMatra6:false,
       isMatra7:false,
       isMatra8:false
   };
    data2={
        isMatra1:false,
        isMatra2:false,
        isMatra3:false,
        isMatra4:false,
        isMatra5:false,
        isMatra6:false,
        isMatra7:false,
        isMatra8:false
    };

  constructor() { }

  ngOnInit() {
  }

  log($event:any){
      console.log("$event",$event)
  }

}
