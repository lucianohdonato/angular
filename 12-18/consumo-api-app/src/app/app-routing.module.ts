import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './component/post-list/post-list.component';
import { PostIdComponent } from './component/post-id/post-id.component';
import { CommentListComponent } from './component/comment-list/comment-list.component';
import { CommentIdComponent } from './component/comment-id/comment-id.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { UserIdComponent } from './component/user-id/user-id.component';
import { HomeComponent } from './component/home/home.component';
import { SobreComponent } from './component/sobre/sobre.component';
import { ContatoComponent } from './component/contato/contato.component';


const routes: Routes = [
  {path: "allPost", component: PostListComponent},
  {path: "idPost", component: PostIdComponent},
  {path: "allComment", component: CommentListComponent},
  {path: "idComment", component: CommentIdComponent},
  {path: "allUser", component: UserListComponent},
  {path: "idUser", component: UserIdComponent},
  {path: "home", component: HomeComponent},
  {path: "sobre", component: SobreComponent},
  {path: "contato", component: ContatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
