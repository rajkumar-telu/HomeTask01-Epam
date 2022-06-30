import { Injectable } from '@angular/core';
import {User} from '../../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  static users: User[] = [
    {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      age: 23,
      login: 'john',
      password: '12*****',
      isDeleted: true,
    },
    {
      id: '2',
      firstName: 'Agent',
      lastName: 'Vikram',
      age: 22,
      login: 'vikram',
      password: '34*****',
      isDeleted: false,
    },
    {
      id: '3',
      firstName: 'Raj',
      lastName: 'Kumar',
      age: 21,
      login: 'rajkumar',
      password: '99*****',
      isDeleted: true,
    },
    {
      id: '4',
      firstName: 'Charan',
      lastName: 'MB',
      age: 23,
      login: 'cherry',
      password: '09*****',
      isDeleted: false,
    },
    {
      id: '5',
      firstName: 'Nithesh',
      lastName: 'Kanne',
      age: 23,
      login: 'nithesh.kanne',
      password: '09*****',
      isDeleted: false,
    },
    {
      id: '6',
      firstName: 'Srivani',
      lastName: 'Reddy',
      age: 23,
      login: 'srivani',
      password: '09*****',
      isDeleted: false,
    },
    {
      id: '7',
      firstName: 'Jane',
      lastName: 'Doe',
      age: 23,
      login: 'jane',
      password: '09*****',
      isDeleted: true,
    },
  ]
  constructor() { }

  static getActiveUsers(): User[] {
    return this.users.filter((user:User) => !user.isDeleted);
  }

  static getDeletedUsers(): User[] {
    return this.users.filter((user:User) => user.isDeleted);
  }

  static setActivation(id:string, isDeleted:boolean){
    const userId = this.users.findIndex((user:User) => user.id == id);
    this.users[userId].isDeleted = isDeleted;
    console.log("In Service :",this.users);  
  }
}
