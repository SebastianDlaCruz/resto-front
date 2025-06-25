import { Component, signal } from '@angular/core';
import { FooterBarComponent, FooterComponent, NavBarComponent } from '@shared/components';
import { Person, PersonComponent } from './components';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { LayoutSearchComponent } from "./components/layout-search/layout-search.component";
import { SearchComponent } from './components/search/search.component';
import { personsData } from './data/persons.data';

@Component({
  selector: 'app-home',
  imports: [NavBarComponent, FooterBarComponent,
    PersonComponent, FooterComponent,
    SearchComponent, LayoutSearchComponent, CarruselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',

})
export class HomeComponent {

  persons: Person[] = personsData;
  visibleLayout = signal(false);

  onVisibleLayout() {
    this.visibleLayout.set(true);
  }

  onDisableLayout() {
    this.visibleLayout.set(false);
  }
}
