import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Actor } from '../modelos/actor';
import { api_response } from '../modelos/api_response';

@Component({
  selector: 'app-detalle-actor',
  templateUrl: './detalle-actor.component.html',
  styleUrls: ['./detalle-actor.component.css']
})
export class DetalleActorComponent implements OnInit {

  actorjson: Actor[];
  no_error: true;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.getActor();
  }

  getActor(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.http.get('http://127.0.0.1:8000/gestorPeliculas/actores')
    .toPromise()
    .then((response: api_response) => {
      this.actorjson = response.data[id-4];
      this.no_error = response.err;
    })
    .catch(error =>{
    });
  }

}
