import { Component, OnInit } from '@angular/core';

import { Peli } from './peli';

const PELIS: Peli[] = [
  { titulo: 'Dimitri', imagen: 'No hay', descripcion: 'Tampoco hay' },
  { titulo: 'Paskade', imagen: 'Puede', descripcion: 'AQUI NO' },
  { titulo: 'Midsdfas', imagen: 'Ni de coña', descripcion: 'Aqui si' },
  { titulo: 'Ahkljsdf', imagen: 'Sigue intentando', descripcion: 'Aqui si' }
]

@Component({
  selector: 'ListaPelis',
  templateUrl: './lista-pelis.component.html',
  styleUrls: []
})

export class ListaPelisComponent {
  pelis = PELIS;
  peliElegida: Peli;
}
