import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherFileText, featherHome, featherSearch, featherUser } from '@ng-icons/feather-icons';
import { latterIconSvg, promotionsIconSvg } from './consts/icons.conts';
@Component({
  selector: 'app-footer-bar',
  imports: [NgIcon],
  templateUrl: './footer-bar.component.html',
  styleUrl: './footer-bar.component.css',
  providers: [provideIcons({ featherHome, featherSearch, featherFileText, featherUser })]
})
export class FooterBarComponent {

  // icons
  homeIcon = featherHome;
  searchIcon = featherSearch;
  letterIcon = featherFileText;
  userIcon = featherUser;

  promotionsIcon = promotionsIconSvg;
  latterIcon = latterIconSvg;
}
