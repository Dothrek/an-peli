import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { api_response } from '../modelos/api_response';
import { Actor } from '../modelos/actor';

@Injectable()
export class ActoresService {

  actores_data = [];
  actor = Actor;

  constructor(
    private http: HttpClient
  ) {}

  getActores() {
    return new Promise((resolve, reject) => {

      if (this.actores_data.length > 0) {
        console.log('no se vuelven a pedir porque hay datos')
        return resolve(this.actores_data);
      } else {

        this.http.get('http://127.0.0.1:8000/gestorPeliculas/actores')
        .toPromise()
        .then((response : api_response) => {
          this.actores_data = response.data;
          return resolve(response.data);
        })
        .catch(error => {
          return reject(error);
        });
      }

    })
  }

  // getActor(id) {
  //   return new Promise((resolve, reject) => {
  //
  //     this.http.get('http://127.0.0.1:8000/gestorPeliculas/actor/'id)
  //     .toPromise()
  //     .then((response: api_response) => {
  //       this.actor = response.data;
  //       return resolve(response.data);
  //     })
  //     .catch(error => {
  //       return reject(error);
  //     });
  //   })
  // }

}
