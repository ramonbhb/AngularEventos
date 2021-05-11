import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventosComponent } from './eventos/eventos.component';
import { PrincipalComponent } from './principal/principal.component';
import { EventoDetalheComponent } from './evento-detalhe/evento-detalhe.component';

const routes: Routes = [
  { path: "", component: PrincipalComponent },
  { path: "eventos", component: EventosComponent},
  { path: "detalhe-evento/:eventoId", component: EventoDetalheComponent}
  //{ path: "shows", component: ShowsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
