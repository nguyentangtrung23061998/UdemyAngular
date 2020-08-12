import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../UserService.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
   users: string[];
  // @Output() userSetToInactive = new EventEmitter<number>();

  constructor(private userSV : UserService){
    this.users=userSV.activeUsers;
  }

  onSetToInactive(id: number) {
    this.userSV.setToActive(id);
  }
}
