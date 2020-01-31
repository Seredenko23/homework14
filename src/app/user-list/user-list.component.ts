import { Component, OnInit } from '@angular/core';
import {ApiService} from '../rest/api.service';
import {User} from './shared/user.model';
import {DataService} from '../shared/data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  private users: User[];

  constructor(private api: ApiService, private data: DataService) { }

  ngOnInit() {
    this.api.getUsers()
      .subscribe(users => {
        this.users = users;
      });
  }
  clickE(e) {
    this.api.getPosts(e).subscribe(posts => {
      this.data.changeData(posts);
    });
  }

}
