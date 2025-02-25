import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EjemploComponent } from './components/ejemplo/ejemplo/ejemplo.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent {
  title = 'gifs-app';
}
