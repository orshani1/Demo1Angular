import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  links:any[] = []
  constructor() {
    this.links = [
      {title:"Yahoo" , link:"www.Yahoo.com"},
      {title:"Google" , link:"www.google.com"} 
    ]
   }

  ngOnInit(): void {
 
  }

}
