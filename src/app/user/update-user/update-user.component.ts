import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.sass']
})
export class UpdateUserComponent implements OnInit {
  user : any
  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });
  constructor(private userService : UserService ,private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      result =>{
        this.userService.getUserById(result['id']).subscribe(
          result =>{
            this.user = result;
          },
          error =>{
            console.log(error);
          }
        )
      },
      error =>{
        console.log(error);
      }
    )
  }
  submit(){
    console.log(this.profileForm.value);
  }
  
}
