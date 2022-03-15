import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-meter',
  templateUrl: './temp-meter.component.html',
  styleUrls: ['./temp-meter.component.css']
})
export class TempMeterComponent implements OnInit {

  constructor() { }
  tempDesc:string = "";

  getNum(num:any):void{
    if(num <=20)
    {
      this.tempDesc = "The Tempeture is pretty cold";
    }
    else if(num >20 && num <=30){
     this.tempDesc = "The Tempeture  is nice and warm";
    }
    else{
     this.tempDesc = "The Tempeture  is fucking hot man ";

    }

  }
  ngOnInit(): void {
  }

}
