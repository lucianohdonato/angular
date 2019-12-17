import { CommentService } from 'src/app/service/comment.service';
import { Component, OnInit } from '@angular/core';
import { Comments } from 'src/app/model/comment';

@Component({
  selector: 'app-comment-id',
  templateUrl: './comment-id.component.html',
  styleUrls: ['./comment-id.component.css']
})
export class CommentIdComponent implements OnInit {

  constructor(public commentService: CommentService){}

  comments: Comments = new Comments(0,0,"","","");
  id:number;

  ngOnInit() {
  }

  btnClick(){
    this.commentService.getById(this.id).subscribe((commentOut: Comments) =>{ 
      this.comments = commentOut});
  }
}
