import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventosComponent } from './eventos/eventos.component';
import { EnderecoComponent } from './endereco/endereco.component';
import { NavegacaoComponent } from './navegacao/navegacao.component';
import { PrincipalComponent } from './principal/principal.component';
import { EventoDetalheComponent } from './evento-detalhe/evento-detalhe.component';

@NgModule({
  declarations: [
    AppComponent,
    EventosComponent,
    EnderecoComponent,
    NavegacaoComponent,
    PrincipalComponent,
    EventoDetalheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
