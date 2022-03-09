import { Component, OnInit } from '@angular/core';
import { User } from 'src/interfaces/User';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit {

  user:User = 
    {
    userName:"orshani1",
    email:"ortheog@gmail.com",
    date:Date.parse("1997-11-17"),

    }
  CalculateAge(dateOfBirth:any){
    let dob = new Date(dateOfBirth);
    let diff_ms = Date.now() - dob.getTime();
    let age_dt = new Date(diff_ms);
    return Math.abs(age_dt.getUTCFullYear() - 1970)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
