import { Component } from '@angular/core';
import { FooterBarComponent, FooterComponent, NavBarComponent } from '@shared/components';
import { Person, PersonComponent } from './components';

@Component({
  selector: 'app-home',
  imports: [NavBarComponent, FooterBarComponent, PersonComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',

})
export class HomeComponent {

  persons: Person[] = [
    {
      img: '/images/adriana.png',
      name: 'Adriana',
      description: 'Muy rico y abundante! Buena ambientación tradicional. Volvería a ir y lo recomiendo.',
      date: '21 de Mar. 2022 21:00hs'
    },
    {
      img: '/images/ezequiel.png',
      name: 'Ezequiel',
      description: 'Excelente lugar para venir a cenar en familia. Muy buena atención.',
      date: '10 de Jul. 2022 21:00hs'
    },
    {
      img: '/images/carlos.png',
      name: 'Carlos',
      description: 'Festeje mi cumpleaños con amigos y la atención fue grandiosa.',
      date: '15 de Oct. 2022 23:00hs'
    },
    {
      img: '/images/fabio.png',
      name: 'Fabio',
      description: 'Muy rico. Volvería a ir y lo recomiendo.',
      date: '2 de Mar. 2022 18:00hs'
    },
  ]


}
