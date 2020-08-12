import { Component, OnInit } from '@angular/core';
import { UserService } from './UserService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserService]
})
export class AppComponent implements OnInit{
  // inactiveUsers=[];
  // activeUsers=[];
  constructor(private userSV:UserService){

  }

  ngOnInit(){
    // this.inactiveUsers = this.userSV.inactiveUsers;
    // this.activeUsers = this.userSV.activeUsers;
  }

  
}
