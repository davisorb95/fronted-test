import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { IUser } from './user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(
    private usersService: UsersService
  ) { }

  users: IUser[] = [];
  pageSize: number = 10;
  lastPosition: number = 0;
  text: string = '';

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  searchUser(): void {
    this.lastPosition = 0;
  }

  prevPage(): void {
    this.lastPosition -= this.pageSize;
  }

  nextPage(): void {
    this.lastPosition += this.pageSize;
  }

}
