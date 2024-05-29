import { Component, OnInit } from '@angular/core';

//
import { Empleados } from './empleados';

@Component({
  selector: 'empleados',
  standalone: true,
  imports: [],
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css',
})
export class EmpleadosComponent implements OnInit {
  title: string = 'Empleado component';
  public empleado!: Empleados;
  public empleados!: Array<Empleados>;

  constructor() {
    this.empleado = new Empleados('Neo Matrix', 30, 'Engineer', true);
    this.empleados = [
      new Empleados('Trinity', 25, 'Engineer 2', true),
      new Empleados('Morpheus', 50, 'Manager', true),
    ];
  }

  ngOnInit() {
    console.log(this.empleado);
    console.log(this.empleados);
  }
}
