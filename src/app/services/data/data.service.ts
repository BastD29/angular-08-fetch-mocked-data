import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  mockUsers = [
    {
      id: 1,
      userName: 'test 1',
    },
    {
      id: 2,
      userName: 'test 2',
    },
    {
      id: 3,
      userName: 'test 3',
    },
    {
      id: 4,
      userName: 'test 4',
    },
    {
      id: 5,
      userName: 'test 5',
    },
    {
      id: 6,
      userName: 'test 6',
    },
  ];

  constructor() {}

  getUsers(): Observable<User[]> {
    return of(this.mockUsers);
  }
}
