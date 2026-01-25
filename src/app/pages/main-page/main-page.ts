import { Component } from '@angular/core';
import { BoxComImg } from '../../components/box-com-img/box-com-img';
import { CarouselCards } from '../../components/carousel-cards/carousel-cards';
import { CarouselBoxesComponent } from '../../components/carousel-boxes/carousel-boxes';
import { ImagemSobreImagem } from '../../components/imagem-sobre-imagem/imagem-sobre-imagem';
import { CarouselFuncionalidades } from '../../components/carousel-funcionalidades/carousel-funcionalidades';
import { CarouselApresentation } from '../../components/carousel-apresentation/carousel-apresentation';
import { TitleMainPage } from '../../components/titles/title-main-page/title-main-page/title-main-page';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll';
import { Clients } from '../../components/clients/clients';


@Component({
  selector: 'app-main-page',
   standalone: true,
  imports: [
    BoxComImg,
    CarouselCards,
    CarouselBoxesComponent,
    ImagemSobreImagem,
    CarouselFuncionalidades,
    CarouselApresentation,
    TitleMainPage,
    AnimateOnScrollDirective,
    Clients
  ],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {

}
