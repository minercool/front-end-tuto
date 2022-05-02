import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.sass']
})
export class ListUsersComponent implements OnInit {
  users : any;
  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.userService.getAllUser().subscribe(
      result =>{
        this.users = result;
      },
      error =>{
        console.log(error)
      }
    )
  }

  delete(user : any){
    this.userService.deleteUserById(user['id']).subscribe(
      result =>{
        this.users.splice(this.users.indexOf(user),1)
        console.log(result)
      },
      error =>{
        console.log(error);
      }
    )
  }

}
