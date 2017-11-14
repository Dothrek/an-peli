import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListaPelisComponent } from './lista-pelis.component';
import { ListaActoresComponent } from './lista-actores/lista-actores.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPelisComponent,
    ListaActoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
