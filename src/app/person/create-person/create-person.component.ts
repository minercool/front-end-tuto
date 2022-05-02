import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from '../person.service';
@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.sass']
})
export class CreatePersonComponent implements OnInit {
  user : any;
  constructor(private router : Router , private personService : PersonService) { }

  ngOnInit(): void {
  }

  addUser(form : any){
    
    this.personService.createUser(form.value).subscribe(
      result =>{
        console.log(result)
        this.router.navigate(['/list-persons'])
      },
      error =>{
        console.log(error);
        
      }
    )
   
  }


}
