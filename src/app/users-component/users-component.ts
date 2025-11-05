import { Component } from '@angular/core';
import { UserTable } from "../user-table/user-table";

@Component({
  selector: 'app-users-component',
  imports: [UserTable],
  templateUrl: './users-component.html',
  styleUrl: './users-component.css'
})
export class UsersComponent {

}
