import { Component } from '@angular/core';

import { PeliculasService } from './services/peliculas.service';
import { ActoresService } from './services/actores.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor (
    private peliculas : PeliculasService,
    private actores : ActoresService
  ) {}
}
