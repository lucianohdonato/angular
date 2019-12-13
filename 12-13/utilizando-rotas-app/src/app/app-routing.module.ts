import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobrenosComponent } from './sobrenos/sobrenos.component';
import { ContatoComponent } from './contato/contato.component';
import { ServicosComponent } from './servicos/servicos.component';


const routes: Routes = [
  {path: "" , component: HomeComponent},
  {path: "sobrenos" , component: SobrenosComponent},
  {path: "contato" , component: ContatoComponent},
  {path: "servicos" , component: ServicosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
