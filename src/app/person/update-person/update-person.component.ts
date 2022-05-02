import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonService } from '../person.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update-person',
  templateUrl: './update-person.component.html',
  styleUrls: ['./update-person.component.sass']
})
export class UpdatePersonComponent implements OnInit {

  constructor(private router : Router,private activaedRoute : ActivatedRoute , private personService : PersonService) { }

  ngOnInit(): void {
  }

  update(form : any){
    this.activaedRoute.params.subscribe(
      result =>{
        this.personService.updatePersonById(result['id'],form.value).subscribe(
          result => {
            this.router.navigate(['/list-persons'])
          },
          error =>{
            console.log(error)
          }
        )
      },
      error =>{
        console.log(error)
      }
    )
  }

}
