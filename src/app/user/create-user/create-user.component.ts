import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.sass']
})
export class CreateUserComponent implements OnInit {

  constructor(private userService : UserService , private router : Router ) { }
  user : any;
  ngOnInit(): void {
  }
  createUser(form : any){
    this.user = {
      name : form.value.name,
      email : form.value.email
    }
    this.userService.addUser(form.value).subscribe(
      result =>{
        console.log(result);
        this.router.navigate(['/list-users'])
      },
      error =>{
        console.log(error);
      }
    )
 
  }

}
