import { Component } from '@angular/core';

@Component({
  selector: 'empleados',
  standalone: true,
  imports: [],
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css',
})
export class EmpleadosComponent {
  public title = 'Titulo componente empleado';
}
