import { UserService } from 'src/app/service/user.service';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/modal/post';

@Component({
  selector: 'app-get-all-post',
  templateUrl: './get-all-post.component.html',
  styleUrls: ['./get-all-post.component.css']
})
export class GetAllPostComponent implements OnInit {

  constructor( private UserService: UserService) { }

  posts: Post[];

  ngOnInit() {
    this.findAll();
  }
  findAll(){
    this.UserService.getAll().subscribe((postOut: Post[]) => {
      this.posts = postOut;
    })
  }

}

