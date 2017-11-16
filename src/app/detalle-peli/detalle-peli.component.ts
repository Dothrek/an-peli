import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Peli } from '../modelos/peli';
import { api_response } from '../modelos/api_response';

@Component({
  selector: 'app-detalle-peli',
  templateUrl: './detalle-peli.component.html',
  styleUrls: ['./detalle-peli.component.css']
})
export class DetallePeliComponent implements OnInit {

  pelijson: Peli[];
  no_error: true;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.getPeli();
  }

  getPeli(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.http.get('http://127.0.0.1:8000/gestorPeliculas/pelis')
    .toPromise()
    .then((response: api_response) => {
      console.log(response.data)
      console.log(response.data[id-3])
      // this.pelijson = response.data[id-3];
      // this.no_error = response.err;
    })
    .catch(error =>{
    });
  }

}
