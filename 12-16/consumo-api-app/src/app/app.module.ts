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
import { GetPostByIdComponent } from './component/get-post-by-id/get-post-by-id.component';
import { GetAllPostComponent } from './component/get-all-post/get-all-post.component';

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    NavbarComponent,
    MenuComponent,
    RodaPeComponent,
    GetPostByIdComponent,
    GetAllPostComponent
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
