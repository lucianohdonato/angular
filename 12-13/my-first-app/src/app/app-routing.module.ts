import { CorponaturezaComponent } from './corponatureza/corponatureza.component';
import { CorpouniversoComponent } from './corpouniverso/corpouniverso.component';
import { CorpoComponent } from './corpo/corpo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: "", component: CorpoComponent},
  { path: "Universo", component: CorpouniversoComponent},
  { path: "Natureza", component: CorponaturezaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
