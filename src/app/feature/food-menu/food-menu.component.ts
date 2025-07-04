import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterBarComponent, FooterComponent, NavBarComponent } from '@shared/components';


@Component({
  selector: 'app-food-menu',
  imports: [RouterOutlet, NavBarComponent, FooterBarComponent,
    FooterComponent],
  templateUrl: './food-menu.component.html',
  styleUrl: './food-menu.component.css'
})
export class FoodMenuComponent {

}
