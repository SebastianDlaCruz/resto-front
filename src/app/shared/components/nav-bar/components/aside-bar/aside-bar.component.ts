import { Component, input, output } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherX } from '@ng-icons/feather-icons';

@Component({
  selector: 'app-aside-bar',
  imports: [NgIcon],
  templateUrl: './aside-bar.component.html',
  styleUrl: './aside-bar.component.css',
  providers: [provideIcons({ featherX })]

})
export class AsideBarComponent {

  xIcon = featherX;
  active = input<boolean>(false)
  onClose = output<void>();


  close() {
    this.onClose.emit();
  }
}
