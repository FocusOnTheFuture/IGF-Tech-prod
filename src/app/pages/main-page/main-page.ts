import { Component } from '@angular/core';
import { Buttons } from '../../components/buttons/buttons';
import { ButtonsProdutos } from '../../components/buttons-produtos/buttons-produtos';
import { Box } from '../../components/box/box';
import { BoxComImg } from '../../components/box-com-img/box-com-img';
import { ButtonSocialMedia } from '../../components/button-social-media/button-social-media';
import { ButtonFooter } from '../../components/button-footer/button-footer';
import { ButtonFooterMap } from '../../components/button-footer-map/button-footer-map';
import { ButtonFooterTelephone } from '../../components/button-footer-telephone/button-footer-telephone';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-main-page',
  imports: [
    Footer
  ],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {

}
