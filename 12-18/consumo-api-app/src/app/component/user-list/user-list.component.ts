import { Component, OnInit } from '@angular/core';
import { ConsumeService } from 'src/app/service/consume.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private consumeService: ConsumeService) { }

  user: User[];

  ngOnInit() {
    this.findAllUsers();
  }
  findAllUsers(){
    this.consumeService.getAllUser().subscribe((userOut: User[]) => {
      this.user = userOut;
    })
  }
}
