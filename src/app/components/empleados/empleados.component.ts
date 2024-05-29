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
  public amount: number = 60;
  public active: boolean = true;
  public roles: Array<string> = ['Engineer', 'Desingner'];
  public joker: any = 'Any variable';
}
