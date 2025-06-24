import { Component } from '@angular/core';
import { NgIcon, provideIcons, provideNgIconsConfig } from '@ng-icons/core';
import { featherFacebook, featherMapPin, featherPhone, featherTwitter } from '@ng-icons/feather-icons';
import { whatsAppIconSvg } from './const/icons.conts';
@Component({
  selector: 'app-footer',
  imports: [NgIcon],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  providers: [
    provideIcons({ featherMapPin, featherPhone, featherTwitter, featherFacebook }),
    provideNgIconsConfig({
      size: '1rem'
    })
  ]
})
export class FooterComponent {

  phoneIcon = featherPhone;
  mapPinIcon = featherMapPin;
  whatsAppIcon = whatsAppIconSvg;
  twitterIcon = featherTwitter;
  facebookIcon = featherFacebook;


}
