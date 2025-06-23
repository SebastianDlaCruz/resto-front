import { Component } from '@angular/core';
import { FooterBarComponent, NavBarComponent } from '@shared/components';
import { Person, PersonComponent } from './components';

@Component({
  selector: 'app-home',
  imports: [NavBarComponent, FooterBarComponent, PersonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',

})
export class HomeComponent {

  persons: Person[] = [
    {
      img: '/images/adriana.png',
      name: 'Adriana',
      description: 'Muy rico y abundante! Buena ambientación tradicional. Volvería a ir y lo recomiendo.'
    }
  ]


}
