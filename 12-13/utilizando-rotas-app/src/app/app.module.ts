import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TituloComponent } from './titulo/titulo.component';
import { MenuComponent } from './menu/menu.component';
import { CorpoComponent } from './corpo/corpo.component';
import { RodapeComponent } from './rodape/rodape.component';
import { HomeComponent } from './home/home.component';
import { SobrenosComponent } from './sobrenos/sobrenos.component';
import { ContatoComponent } from './contato/contato.component';
import { ServicosComponent } from './servicos/servicos.component';

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    MenuComponent,
    CorpoComponent,
    RodapeComponent,
    HomeComponent,
    SobrenosComponent,
    ContatoComponent,
    ServicosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
