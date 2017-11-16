import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { PeliculasService } from './services/peliculas.service';

import { AppComponent } from './app.component';
import { ListaPelisComponent } from './lista-peliculas/lista-pelis.component';
import { ListaActoresComponent } from './lista-actores/lista-actores.component';
import { DetallePeliComponent } from './detalle-peli/detalle-peli.component';
import { DetalleActorComponent } from './detalle-actor/detalle-actor.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPelisComponent,
    ListaActoresComponent,
    DetallePeliComponent,
    DetalleActorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    PeliculasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
