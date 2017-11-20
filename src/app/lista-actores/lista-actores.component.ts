import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ActoresService } from '../services/actores.service';

import 'rxjs/add/operator/topromise';

import { Actor } from '../modelos/actor';

@Component({
  selector: 'app-lista-actores',
  templateUrl: './lista-actores.component.html',
  styleUrls: ['./lista-actores.component.css']
})
export class ListaActoresComponent implements OnInit {

  actorjson: Actor[];
  no_error: boolean = true;

  constructor(
    private http: HttpClient,
    private Actorsrv : ActoresService
  ) {}

  ngOnInit(): void {
    this.getActores();
  }

  getActores() {
    this.Actorsrv.getActores()
    .then((response : Actor[]) => {
      this.actorjson = response;
      this.no_error = false;
    })
    .catch(error => {
      this.no_error = false;
      this.actorjson = [];
    })
  }

}
