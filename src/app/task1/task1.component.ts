import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.servis';
import { User } from './users.servis';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css'],
  providers: [UsersService],
})
export class Task1Component implements OnInit {
  loading = false;
  users: User[] = [];
  constructor(private usersService: UsersService) {}

  loadUsers() {
    this.loading = true;
    this.usersService.getUsers().then((user) => {
      this.users = user;
      this.loading = false;
    });
  }
  ngOnInit() {}
}
