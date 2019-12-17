import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  aparecerMenu(){
    document.getElementById("mudar").style.visibility = "visible";
  }
  apagarMenu(){
    document.getElementById("mudar").style.visibility = "hidden";
  }
}
