import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PeliculasService } from '../services/peliculas.service';

import 'rxjs/add/operator/topromise';

import { Peli } from '../modelos/peli';

@Component({
  selector: 'app-lista-pelis',
  templateUrl: './lista-pelis.component.html',
  styleUrls: []
})

export class ListaPelisComponent implements OnInit {
  no_error : boolean = true;
  pelisjson : Peli[];

constructor(
  private http: HttpClient,
  private PelisSrv: PeliculasService
) {}

  ngOnInit(): void {
    this.getPeliculas();
  }

  getPeliculas() {
    this.PelisSrv.getPeliculas()
      .then((response : Peli[]) => {
        this.pelisjson = response;
        this.no_error = false;
      })
      .catch(error => {
        console.log(error);
        this.no_error = false;
        this.pelisjson = [];
      })
  }
}
