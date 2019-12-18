import { Component, OnInit } from '@angular/core';
import { ConsumeService } from 'src/app/service/consume.service';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user-id',
  templateUrl: './user-id.component.html',
  styleUrls: ['./user-id.component.css']
})
export class UserIdComponent implements OnInit {

  user: User = new User(0,"","","",null,"","",null);
  idUser: number;

  constructor(private consumeService: ConsumeService) { }

  ngOnInit() {
  }
  btnClickUser(){
    this.consumeService.getByIdUser(this.idUser).subscribe((userOut: User) =>{
      this.user = userOut;
      console.log(this.user)
    })
  }
}
