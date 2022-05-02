import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-persons',
  templateUrl: './list-persons.component.html',
  styleUrls: ['./list-persons.component.sass']
})
export class ListPersonsComponent implements OnInit {
  persons : any
  constructor(private personService : PersonService , private router : Router) { }

  ngOnInit(): void {
  this.personService.getAllPersons().subscribe(
    result =>{
      this.persons = result;
    },
    error =>{
      console.log(error);
    }
  )
  }

  delete(person : any){
    this.personService.deletePersonById(person['id']).subscribe(
      result => {
        console.log(result)
        this.persons.splice(this.persons.indexOf(person),1)

      },
      error => {
        console.log(error)
        this.router.navigate(['/list-persons']);

      }
    )
  }

}
