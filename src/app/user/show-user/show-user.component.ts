import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.sass']
})
export class ShowUserComponent implements OnInit {
  user : any
  constructor(private userService : UserService,private activatedRoute : ActivatedRoute) { }

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
      }
    )
  }

}
