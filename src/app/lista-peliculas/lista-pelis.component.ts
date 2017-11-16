import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api_response } from '../modelos/api_response';

import 'rxjs/add/operator/topromise';

import { Peli } from '../modelos/peli';

@Component({
  selector: 'ListaPelis',
  templateUrl: './lista-pelis.component.html',
  styleUrls: []
})

export class ListaPelisComponent implements OnInit {
  no_error : true;
  pelisjson : Peli[];

constructor(private http: HttpClient) {}

  ngOnInit(): void {

    this.http.get('http://127.0.0.1:8000/gestorPeliculas/pelis')
      .toPromise()
      .then((response : api_response) => {
        this.pelisjson = response.data;
        this.no_error = response.err;
      })
      .catch(error => {
      });
  }
}
