import { Component } from '@angular/core';

@Component({
  selector: 'fruta',
  standalone: true,
  imports: [],
  templateUrl: './fruta.component.html',
  styleUrl: './fruta.component.css',
})
export class FrutaComponent {
  public nombre_componente:string = 'Componente de fruta';
  public listado_frutas:string = 'Naranja, Manzana, Pera';
}
