import { Component } from '@angular/core';
import { FooterBarComponent, NavBarComponent } from '@shared/components';

@Component({
  selector: 'app-home',
  imports: [NavBarComponent, FooterBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',

})
export class HomeComponent {

}
