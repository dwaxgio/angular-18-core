import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//
import { FrutaComponent } from './components/fruta/fruta.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FrutaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-18-core';
}
