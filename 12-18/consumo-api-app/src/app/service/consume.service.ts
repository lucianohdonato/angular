import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsumeService {

  constructor(private http: HttpClient) { }

  getAllPost(){
    return this.http.get("https://jsonplaceholder.typicode.com/posts")
  }

  getByIdPost(id: number){
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }

  getAllComment(){
    return this.http.get("https://jsonplaceholder.typicode.com/comments")
  }

  getByIdComment(id: number){
    return this.http.get(`https://jsonplaceholder.typicode.com/comments/${id}`)
  }

  getAllUser(){
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }

  getByIdUser(id: number){
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  }
}
