import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Input() active?: boolean;
  @Output() onClose = new EventEmitter<void>();


  close() {
    this.onClose.emit();
  }
}
