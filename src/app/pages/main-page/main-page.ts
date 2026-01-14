import { Component } from '@angular/core';
import { BoxComImg } from '../../components/box-com-img/box-com-img';
import { CarouselCards } from '../../components/carousel-cards/carousel-cards';
import { CarouselBoxesComponent } from '../../components/carousel-boxes/carousel-boxes';
import { ImagemSobreImagem } from '../../components/imagem-sobre-imagem/imagem-sobre-imagem';
import { CarouselFuncionalidades } from '../../components/carousel-funcionalidades/carousel-funcionalidades';
import { CarouselApresentation } from '../../components/carousel-apresentation/carousel-apresentation';


@Component({
  selector: 'app-main-page',
   standalone: true,
  imports: [
    BoxComImg,
    CarouselCards,
    CarouselBoxesComponent,
    ImagemSobreImagem,
    CarouselFuncionalidades,
    CarouselApresentation
  ],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {

}
