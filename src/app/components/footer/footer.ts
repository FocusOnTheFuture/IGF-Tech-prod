import { Component } from '@angular/core';
import { ButtonSocialMedia } from '../button-social-media/button-social-media';
import { ButtonFooter } from '../button-footer/button-footer';
import { ButtonFooterMap } from '../button-footer-map/button-footer-map';
import { ButtonFooterTelephone } from '../button-footer-telephone/button-footer-telephone';

@Component({
  selector: 'app-footer',
  imports: [
    ButtonSocialMedia,
    ButtonFooter,
    ButtonFooterMap,
    ButtonFooterTelephone
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {

}
