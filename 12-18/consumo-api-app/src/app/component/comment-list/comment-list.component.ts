import { Component, OnInit } from '@angular/core';
import { ConsumeService } from 'src/app/service/consume.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  constructor(private consumeService: ConsumeService) { }

  comment: Comment[];

  ngOnInit() {
    this.findAllComments();
  }
  findAllComments(){
    this.consumeService.getAllComment().subscribe((commentOut: Comment[]) => {
      this.comment = commentOut;
    })
  }
}
