import { Component, Input } from '@angular/core';
import { Coche } from '../../models/Coche';

@Component({
  selector: 'app-hijocoche',
  templateUrl: './hijocoche.component.html',
  styleUrl: './hijocoche.component.css'
})
export class HijococheComponent {

  @Input() coche!: Coche;


  toggleEncendido() {
    this.coche.estado = !this.coche.estado;
  }


  acelerar() {
    if (this.coche.estado) {
      this.coche.velocidad += this.coche.aceleracion;
    } else {
      alert("El coche está apagado. Enciéndelo primero.");
    }
  }

}
