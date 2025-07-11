import { Component, HostListener, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartComponent, FooterBarComponent, FooterComponent, NavBarComponent, SearchMovilComponent } from '@shared/components';


@Component({
  selector: 'app-food-menu',
  imports: [RouterOutlet, NavBarComponent, FooterBarComponent,
    FooterComponent, SearchMovilComponent, CartComponent],
  templateUrl: './food-menu.component.html',
  styleUrl: './food-menu.component.css'
})
export class FoodMenuComponent {


  active = signal(false);
  activeCart = signal(false);

  onIsActive() {
    this.active.set(!this.active());
  }

  onOpenCart() {
    this.active.set(true);
  }
  onCloseCart() {
    this.active.set(false);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const target = event.target as Window;
    this.updateIsActive(target.innerWidth);
  }

  private updateIsActive(width: number) {
    this.active.set(width < 980 && this.active());
  }
}
