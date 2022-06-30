import { TestBed } from '@angular/core/testing';
import { UsersListComponent } from '../components/users-list/users-list.component';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set activation to true',()=>{
    UserService.users[0].isDeleted = false;
    UserService.setActivation(UserService.users[0].id,true);
    let resultStatus = UserService.users[0].isDeleted;
    expect(resultStatus).toBe(true);
  })

  it('should set activation to false', () => {
    UserService.users[0].isDeleted = true;
    UserService.setActivation(UserService.users[0].id, false);
    let resultStatus = UserService.users[0].isDeleted;
    expect(resultStatus).toBe(false);
  })
});
