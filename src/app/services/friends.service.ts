import { Injectable } from '@angular/core';
import {Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  friends: any [] = ['Biba', 'Boba'];

  getFriends() : Observable<any> {
    return of(this.friends)
  }

  search(str: string) {
    return of(this.friends.filter(friend => friend.includes(str)));
  }

  constructor() { }
}
