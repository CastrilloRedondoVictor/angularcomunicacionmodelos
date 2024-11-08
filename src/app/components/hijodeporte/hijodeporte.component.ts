import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijodeporte',
  templateUrl: './hijodeporte.component.html',
  styleUrl: './hijodeporte.component.css'
})
export class HijodeporteComponent {

  @Input() deporte!: string;

  @Output() setFavorito = new EventEmitter();


  setFavoritoHijo(event: any) {
    this.setFavorito.emit(this.deporte)
  }

}
