import { Component } from '@angular/core';
import { Coche } from '../../models/Coche';

@Component({
  selector: 'app-padrecoches',
  templateUrl: './padrecoches.component.html',
  styleUrl: './padrecoches.component.css'
})
export class PadrecochesComponent {

  public coches: Coche[];

  constructor(){
    this.coches = [
      {
        marca: 'Ferrari',
        modelo: 'Enzo',
        aceleracion: 20,
        velocidad: 0,
        estado: false
      },
      {
        marca: 'Lamborghini',
        modelo: 'Veneno',
        aceleracion: 30,
        velocidad: 0,
        estado: false
      },
    ]
  }

}
