import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  constructor() {
    console.log('ManageComponent loaded.');
  }
  userPreview: any = null;
  ngOnInit(): void {
    this.allUsers = UserService.users
    console.log("ManageComponent ngOnInit", this.allUsers);
  }
  allUsers: User[] = []
  showUser(id: string) {
    this.userPreview = UserService.users.find(user => user.id == id);
  }
}
