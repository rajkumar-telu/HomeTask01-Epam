import { Component, OnInit, Optional } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../../models/user.model'

@Component({
  selector: 'app-deleted',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    this.loadDeletedUsers();
    console.log("Ng", this.deletedUsers);
  }

  deletedUsers: User[] = []

  loadDeletedUsers() {
    this.deletedUsers = UserService.getDeletedUsers();
  }

  activateUser(id: string) {
    UserService.setActivation(id, false);
    this.loadDeletedUsers();
  }
}