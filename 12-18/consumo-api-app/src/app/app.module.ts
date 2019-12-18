import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TituloComponent } from './component/titulo/titulo.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { MenuComponent } from './component/menu/menu.component';
import { RodaPeComponent } from './component/roda-pe/roda-pe.component';
import { PostIdComponent } from './component/post-id/post-id.component';
import { PostListComponent } from './component/post-list/post-list.component';
import { CommentIdComponent } from './component/comment-id/comment-id.component';
import { CommentListComponent } from './component/comment-list/comment-list.component';
import { UserIdComponent } from './component/user-id/user-id.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { HomeComponent } from './component/home/home.component';
import { SobreComponent } from './component/sobre/sobre.component';
import { ContatoComponent } from './component/contato/contato.component';


@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    NavbarComponent,
    MenuComponent,
    RodaPeComponent,
    PostIdComponent,
    PostListComponent,
    CommentIdComponent,
    CommentListComponent,
    UserIdComponent,
    UserListComponent,
    HomeComponent,
    SobreComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
