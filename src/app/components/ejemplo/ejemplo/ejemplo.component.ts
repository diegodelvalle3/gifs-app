import { ChangeDetectionStrategy, Component, signal } from '@angular/core';


interface nombres{
  name: string,
  edad: number
  gusto?: string,
}

@Component({
  selector: 'app-ejemplo',
  imports: [],
  templateUrl: './ejemplo.component.html',
  standalone: true
})

export class EjemploComponent {
  nombre = 'Diego';
  favorito = signal([
    'Cirque du Soleil', 'Stranger Things', 'Interestelar'
  ])

  objeto: nombres = {
    name: 'Diego',
    edad: 0,
  }

  nombres: nombres[] = [
    {
      name: 'Satier',
      edad: 19,
      gusto: this.favorito()[0]
    },
    {
      name: 'Enrique',
      edad: 19
    },
    {
      name: 'Sati',
      edad: 20
    },{
      name: 'Diego del Valle',
      edad: 19,
      gusto: this.favorito()[2]
    },{
      name: 'Diego Satier',
      edad: 20
    }
  ];
}
