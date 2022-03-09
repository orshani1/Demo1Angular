import { Component, OnInit } from '@angular/core';
import { Singer } from 'src/interfaces/Singer';

@Component({
  selector: 'app-singer',
  templateUrl: './singer.component.html',
  styleUrls: ['./singer.component.css']
})
export class SingerComponent implements OnInit {

  info:Singer = {
    FirstName:"Biggie",
    LastName:"Smalls",
    Age:24,
    Songs:["Hypnotize","Write it down","Mo Money Mo Problems","Sucidal Thoughts"],
    Img:"https://www.gqmiddleeast.com/2021/06/Biggie-Crop-2.jpg",
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
