import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http : HttpClient) { }

  getAllPersons(){
    let data = this.http.get<any>("http://localhost:3005/person/get")
    return data;
  }

  getPersonById(id : String){
    let data = this.http.get<any>("http://localhost:3005/person/get/"+id);
    return data;
  }

  deletePersonById(id : String){
    let data = this.http.delete<any>("http://localhost:3005/person/delete/"+id);
    return data;
  }

  createUser(body : any){
    let data = this.http.post<any>("http://localhost:3005/person/create",body)
    return data;
  }

  updatePersonById(id : String , body : any){
    let data = this.http.patch("http://localhost:3005/person/update/"+id,body)
    return data
  }

}
