import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/topromise';

import { Actor } from '../modelos/actor';
import { api_response } from '../modelos/api_response';

@Component({
  selector: 'app-lista-actores',
  templateUrl: './lista-actores.component.html',
  styleUrls: ['./lista-actores.component.css']
})
export class ListaActoresComponent implements OnInit {

  actorjson: Actor[];
  hay_error: true;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {

    this.http.get('http://127.0.0.1:8000/gestorPeliculas/actores')
      .toPromise()
      .then((response : api_response) => {
        this.actorjson = response.data;
        this.hay_error = response.err;
      })
      .catch(error => {
      });
  }

}
