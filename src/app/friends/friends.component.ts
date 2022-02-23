import { Component, OnInit } from '@angular/core';
import {FriendsService} from "../services/friends.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  friends: any;
  formControl!: FormControl;

  constructor(private readonly friendsService: FriendsService) { }

  async ngOnInit(): Promise<void> {
    this.formControl = new FormControl('');
    this.friends = await this.friendsService.getFriends().toPromise();
  }

  async search(): Promise<void> {
    this.friends = await this.friendsService.search(this.formControl.value).toPromise();
  }

}
