import { GetPostByIdComponent } from './component/get-post-by-id/get-post-by-id.component';
import { GetAllPostComponent } from './component/get-all-post/get-all-post.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  {path: "all" , component: GetAllPostComponent},
  {path: "id" , component: GetPostByIdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
