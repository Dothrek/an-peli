import { Component, OnInit } from '@angular/core';

import { Peli } from './peli';

const PELIS: Peli[] = [
  { titulo: 'Dimitri', imagen: 'No hay', descripcion: 'Tampoco hay', actores: ['pepe'] },
  { titulo: 'Paskade', imagen: 'Puede', descripcion: 'AQUI NO', actores: ['pepe'] },
  { titulo: 'Midsdfas', imagen: 'Ni de coña', descripcion: 'Aqui si', actores: ['pepe'] },
  { titulo: 'Ahkljsdf', imagen: 'Sigue intentando', descripcion: 'Aqui si', actores: ['pepe', 'laura', 'jose'] }
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
