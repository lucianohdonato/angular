import { Comments } from 'src/app/model/comment';
import { CommentService } from 'src/app/service/comment.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  constructor(private commentService: CommentService) { }

  comments: Comments[];

  ngOnInit() {
    this.findAll();
  }

  findAll(){
    this.commentService.getAll().subscribe((commentsOut: Comments[]) => {
      this.comments = commentsOut;
    })
  }

}
