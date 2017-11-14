import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaPelisComponent } from './lista-pelis.component';
import { ListaActoresComponent } from './lista-actores.component';
import { DetallePeliComponent } from './detalle-peli.component';
import { DetalleActorComponent } from './detalle-actor.component';

const routes: Routes = [
  { path: '' redirectTo: '/ListaPelis', pathMatch: 'full' },
  { path: 'ListaPelis', component: ListaPelisComponent },
  { path: 'ListaActores', component: ListaActoresComponent },
  { path: 'DetallePeli', component: DetallePeliComponent },
  { path: 'DetalleActor', component: DetalleActorComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
