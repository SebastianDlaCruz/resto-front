import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherAlignJustify, featherLogOut, featherShoppingCart } from '@ng-icons/feather-icons';
import { AsideBarComponent } from './components/aside-bar/aside-bar.component';

@Component({
  selector: 'app-nav-bar',
  imports: [NgIcon, AsideBarComponent],
  providers: [provideIcons({ featherLogOut, featherShoppingCart, featherAlignJustify })],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  // icons
  logoutIcon = featherLogOut;
  cartIcon = featherShoppingCart;
  hamburgerIcon = featherAlignJustify;

  activeAside = false;


  onActive() {
    this.activeAside = true;
  }

  onClose() {
    this.activeAside = false;
  }

}
