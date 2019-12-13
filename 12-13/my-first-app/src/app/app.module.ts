import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TituloComponent } from './titulo/titulo.component';
import { MenuComponent } from './menu/menu.component';
import { CorpoComponent } from './corpo/corpo.component';
import { RodapeComponent } from './rodape/rodape.component';
import { CorpouniversoComponent } from './corpouniverso/corpouniverso.component';
import { CorponaturezaComponent } from './corponatureza/corponatureza.component';

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    MenuComponent,
    CorpoComponent,
    RodapeComponent,
    CorpouniversoComponent,
    CorponaturezaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
