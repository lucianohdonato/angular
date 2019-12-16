import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
  
  getById(id:number){
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

    /*create(user: User){
    this.http.post("https://jsonplaceholder.typicode.com/users", user);
  }

  update(user: User){
    this.http.put(`https://jsonplaceholder.typicode.com/users/${user.id}`, user);
  }

  delete(id:number){
    return this.http.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
  }*/
}
