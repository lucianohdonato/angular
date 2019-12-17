import { UserService } from 'src/app/service/user.service';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/modal/post';

@Component({
  selector: 'app-get-post-by-id',
  templateUrl: './get-post-by-id.component.html',
  styleUrls: ['./get-post-by-id.component.css']
})
export class GetPostByIdComponent implements OnInit {

  constructor(public UserService: UserService) { }

  posts: Post = new Post(0,0,"","");
  id:number;

  ngOnInit() {
  }

  btnClick(){
    this.UserService.getById(this.id).subscribe((postOut: Post) => {
      this.posts = postOut;
    })
  }

}

