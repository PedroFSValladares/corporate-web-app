import { Component } from '@angular/core';
import { User } from '../domain/User';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-user-table',
  imports: [RouterLink],
  templateUrl: './user-table.html',
  styleUrl: './user-table.css'
})
export class UserTable {
  users: User[] = [new User(1, 'Pedro', 'pedro.teste@email.com'), new User(1, 'Pedro', 'pedro.teste@email.com'), new User(1, 'Pedro', 'pedro.teste@email.com')]

  editUser(userId: number) {

  }

  deleteUser(userId: Number) {

  }

  detailUser(userId: Number) {

  }
}
