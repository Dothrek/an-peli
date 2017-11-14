import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaPelisComponent } from './lista-pelis.component';

const routes: Routes = [
  { path: '', redirectTo: '/ListaPelis', pathMatch: 'full' },
  { path: 'ListaPelis', component: ListaPelisComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


// http://127.0.0.1:8000/gestorPeliculas/actores
