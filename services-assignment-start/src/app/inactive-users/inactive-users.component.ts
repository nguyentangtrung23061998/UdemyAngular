import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../UserService.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  users: string[];
  // @Output() userSetToActive = new EventEmitter<number>();

  constructor(private userSV : UserService){
    this.users=userSV.inactiveUsers;
  }

  onSetToActive(id: number) {
    // this.userSetToActive.emit(id);
    this.userSV.setToInactive(id);
  }
}
