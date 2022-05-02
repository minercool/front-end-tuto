import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }
  getAllUser(){
    let data = this.http.get<any>("https://jsonplaceholder.typicode.com/users");
    return data;
  }
  getUserById(id : String){
    let data = this.http.get<any>("https://jsonplaceholder.typicode.com/users/"+id);
    return data;
  }
  deleteUserById(id : String){
    let data = this.http.delete<any>("https://jsonplaceholder.typicode.com/users/"+id);
    return data;
  }
  addUser(user : any){
    let data = this.http.post<any>("https://jsonplaceholder.typicode.com/users",user);
    return data;
  }
}
