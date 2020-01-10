import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  id:string = ""
  constructor(private router: Router){
  }
  title = 'generation-app';

  irCadastro(){
    this.router.navigate(['/cadastro']);
  }

  Alterar(){
    this.router.navigate(['/cadastro', this.id]);
  }
}
