import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//
import { FrutaComponent } from './components/fruta/fruta.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FrutaComponent, EmpleadosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-18-core';
}
