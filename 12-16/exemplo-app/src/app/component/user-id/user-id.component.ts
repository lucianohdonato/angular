import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-id',
  templateUrl: './user-id.component.html',
  styleUrls: ['./user-id.component.css']
})
export class UserIdComponent implements OnInit {

  user: User = new User(0, '', '', '', null, '', '', null);
  id:number;
  constructor(public userService:UserService) { }

  ngOnInit() {
  }

  btnClick(){
    this.userService.getById(this.id).subscribe((userOut: User)=>{
      this.user = userOut;
    })
  }

}
