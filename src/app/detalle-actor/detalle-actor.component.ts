import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { ActoresService } from '../services/actores.service';

import { Actor } from '../modelos/actor';
import { api_response } from '../modelos/api_response';

@Component({
  selector: 'app-detalle-actor',
  templateUrl: './detalle-actor.component.html',
  styleUrls: ['./detalle-actor.component.css']
})
export class DetalleActorComponent implements OnInit {

  actorjson: Actor[];
  no_error: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private Actorsrv: ActoresService
  ) { }

  ngOnInit(): void {
    this.getActor();
  }

  getActor() {
    // this.Actorsrv.getActor()
    // .then((response : Actor[]) => {
    //   this.actorjson = response;
    //   this.no_error = false;
    // })
    // .catch(error => {
    //   this.no_error =false;
    //   this.actorjson = [];
    // })
  }

}
