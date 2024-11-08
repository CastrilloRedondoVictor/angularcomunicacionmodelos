import { Component } from '@angular/core';

@Component({
  selector: 'app-padredeportes',
  templateUrl: './padredeportes.component.html',
  styleUrl: './padredeportes.component.css'
})
export class PadredeportesComponent {

  deportes: string[];

  favorito: string;

  constructor() {
    this.deportes = ['Futbol', 'Baloncesto', 'Tenis', 'Boxeo', 'Volley']
    this.favorito = ''
  }


  setFavorito(event: any): void {
    this.favorito = event
  }
}
