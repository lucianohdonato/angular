import { Component, OnInit } from '@angular/core';
import { ConsumeService } from 'src/app/service/consume.service';
import { Comment } from 'src/app/model/comment';

@Component({
  selector: 'app-comment-id',
  templateUrl: './comment-id.component.html',
  styleUrls: ['./comment-id.component.css']
})
export class CommentIdComponent implements OnInit {

  comment: Comment = new Comment(0,0,"","","");
  idComment: number; 

  constructor(private consumeService: ConsumeService) { }

  ngOnInit() {
  }
  btnClickComment(){
    this.consumeService.getByIdComment(this.idComment).subscribe((commentOut: Comment) =>{
      this.comment = commentOut;
    })
  }
}
