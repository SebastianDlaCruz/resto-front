import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons, provideNgIconsConfig } from '@ng-icons/core';
import { featherShoppingCart, featherX } from '@ng-icons/feather-icons';
@Component({
  selector: 'app-cart',
  imports: [NgIcon, RouterLink],
  providers: [
    provideIcons({ featherShoppingCart, featherX }),
    provideNgIconsConfig({
      color: '#FFA800',
      size: '1.7rem'
    })
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  iconCart = featherShoppingCart;
  iconX = featherX;

  isActive = input.required<boolean>();
  close = output<void>();
}
