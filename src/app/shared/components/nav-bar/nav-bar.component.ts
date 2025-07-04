import { Component, inject, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthRol } from '@core/models';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherAlignJustify, featherLogOut, featherShoppingCart } from '@ng-icons/feather-icons';
import { Store } from '@ngrx/store';
import { ModalAuthComponent } from '../modal-auth/modal-auth.component';
import { AsideBarComponent } from './components/aside-bar/aside-bar.component';

@Component({
  selector: 'app-nav-bar',
  imports: [NgIcon, AsideBarComponent, ModalAuthComponent, RouterLink],
  providers: [provideIcons({ featherLogOut, featherShoppingCart, featherAlignJustify })],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  @ViewChild('modalAuth') modalAuth!: ModalAuthComponent;

  // icons
  logoutIcon = featherLogOut;
  cartIcon = featherShoppingCart;
  hamburgerIcon = featherAlignJustify;

  activeAside = false;
  private readonly store = inject<Store<AuthRol>>(Store);
  authRol = this.store.selectSignal(select => select.authRol);


  onOpenModal() {
    if (this.modalAuth) {
      this.modalAuth.open();
    }

  }


  onActive() {
    this.activeAside = true;
  }

  onClose() {
    this.activeAside = false;
  }

}
