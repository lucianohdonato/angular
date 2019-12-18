import { Component, OnInit } from '@angular/core';
import { ConsumeService } from 'src/app/service/consume.service';
import { Post } from 'src/app/model/post';

@Component({
  selector: 'app-post-id',
  templateUrl: './post-id.component.html',
  styleUrls: ['./post-id.component.css']
})
export class PostIdComponent implements OnInit {

  post: Post = new Post(0,0,"","");
  idPost: number;

  constructor(private consumeService: ConsumeService) { }

  ngOnInit() {
  }
  btnClickPost(){
    this.consumeService.getByIdPost(this.idPost).subscribe((postOut: Post) =>{
      this.post = postOut;
    })
  }
}
