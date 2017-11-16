import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaPelisComponent } from './lista-peliculas/lista-pelis.component';
import { ListaActoresComponent } from './lista-actores/lista-actores.component';
import { DetallePeliComponent } from './detalle-peli/detalle-peli.component';
import { DetalleActorComponent } from './detalle-actor/detalle-actor.component';

const routes: Routes = [
  { path: '', redirectTo: '/ListaPelis', pathMatch: 'full' },
  { path: 'ListaPelis', component: ListaPelisComponent },
  { path: 'ListaActores', component: ListaActoresComponent },
  { path: 'DetallePeli/:id', component: DetallePeliComponent },
  { path: 'DetalleActor/:id', component: DetalleActorComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
