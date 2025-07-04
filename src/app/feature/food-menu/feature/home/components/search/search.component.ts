import { Component, output } from '@angular/core';
import { NgIcon, provideIcons, provideNgIconsConfig } from '@ng-icons/core';
import { featherSearch } from '@ng-icons/feather-icons';
@Component({
  selector: 'app-search',
  imports: [NgIcon],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
  providers: [
    provideIcons({ featherSearch }),
    provideNgIconsConfig({
      color: '#acacac',
      size: '1.5rem'
    })
  ]
})
export class SearchComponent {
  searchIcon = featherSearch;
  onFocus = output<void>();
  onBlur = output<void>();


  onVisibleLayout() {
    this.onFocus.emit();
  }

  onDisableLayout() {
    this.onBlur.emit();
  }
}
