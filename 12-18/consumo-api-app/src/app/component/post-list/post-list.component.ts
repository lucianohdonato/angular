import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post';
import { ConsumeService } from 'src/app/service/consume.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor(private consumeService: ConsumeService) { }

  post: Post[];

  ngOnInit() {
    this.findAllPosts();
  }
  findAllPosts(){
    this.consumeService.getAllPost().subscribe((postOut: Post[]) => {
      this.post = postOut;
    })
  }
}
