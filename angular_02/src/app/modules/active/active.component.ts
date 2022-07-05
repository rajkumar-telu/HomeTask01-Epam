import { Component, OnInit, Optional } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css'],
  providers: [UserService]
})
export class ActiveComponent implements OnInit {
  constructor() {
    console.log("ActiveComponent constructor");

  }

  ngOnInit(): void {
    this.loadActiveUsers();
  }

  activeUsers: User[] = []

  loadActiveUsers() {
    this.activeUsers = UserService.getActiveUsers();

  }
  deactivateUser(id: string) {
    UserService.setActivation(id, true);
    this.loadActiveUsers();
  }
}
