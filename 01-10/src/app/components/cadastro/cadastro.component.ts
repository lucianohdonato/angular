import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  id: string;
  email: string;
  senha: string;
  confirmSenha: string;
  mensagemTipoSenha: string = 'fraca';

  erroEmail: boolean = false;
  erroSenhaNaoConfere: boolean = false;
  erroSenhaNaoForte: boolean = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.route.snapshot.params['teste'];
  }

  salvar() {
    if (this.email.indexOf('@') == -1)
      this.erroEmail = true;
    else
      this.erroEmail = false;

    if (this.senha == this.confirmSenha) {
      this.erroSenhaNaoConfere = false;
    } else {
      this.erroSenhaNaoConfere = true;
    }

    if (this.erroEmail == false && this.erroSenhaNaoConfere == false && this.erroSenhaNaoForte == false) {
      //Submit
    }
  }

  tipoSenha() {
    this.mensagemTipoSenha = 'fraco';

    if (this.senha.indexOf('.') >= 0 || this.senha.indexOf(',') >= 0)
      this.mensagemTipoSenha = 'medio';

    if (this.senha.indexOf('@') >= 0)
      this.mensagemTipoSenha = 'forte';

  }


}
