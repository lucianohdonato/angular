import { SobreComponent } from './component/sobre/sobre.component';
import { ContatoComponent } from './component/contato/contato.component';
import { HomeComponent } from './component/home/home.component';
import { CommentListComponent } from './component/comment-list/comment-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentIdComponent } from './component/comment-id/comment-id.component';


const routes: Routes = [
  {path: "all", component: CommentListComponent},
  {path: "id", component: CommentIdComponent},
  {path: "home", component: HomeComponent},
  {path: "contato", component: ContatoComponent},
  {path: "sobre", component: SobreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
