import { Component } from '@angular/core';

@Component({
  selector: 'fruta',
  standalone: true,
  imports: [],
  templateUrl: './fruta.component.html',
  styleUrl: './fruta.component.css',
})
export class FrutaComponent {
  public nombre_componente:string = 'Fruta component';
  public listado_frutas:string = 'Naranja, Manzana, Pera';
}
