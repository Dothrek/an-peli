import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api_response } from '../modelos/api_response';

@Injectable()
export class PeliculasService {

  peliculas_data = [];

  constructor(
    private http: HttpClient
  ) {}

  getPeliculas() {
    return new Promise((resolve, reject) => {

      if (this.peliculas_data.length > 0) {
        console.log('no se vuelven a pedir porque hay datos')
        return resolve(this.peliculas_data);
      } else {

        this.http.get('http://127.0.0.1:8000/gestorPeliculas/pelis')
        .toPromise()
        .then((response : api_response) => {
          this.peliculas_data = response.data;
          return resolve(response.data);
        })
        .catch(error => {
          return reject(error);
        });
      }

    })
  }

  getPeli() {}

}
