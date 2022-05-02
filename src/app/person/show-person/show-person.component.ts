import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-show-person',
  templateUrl: './show-person.component.html',
  styleUrls: ['./show-person.component.sass']
})
export class ShowPersonComponent implements OnInit {
  person : any
  constructor(private personService : PersonService , private activaedRoute : ActivatedRoute ) { }

  ngOnInit(): void {
    this.activaedRoute.params.subscribe(
      result =>{
        this.personService.getPersonById(result['id']).subscribe(
          result =>{
            this.person = result
            console.log(this.person);
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
