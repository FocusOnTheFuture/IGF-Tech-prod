import { Component } from '@angular/core';
import { BoxComImg } from '../../components/box-com-img/box-com-img';
import { CarouselCards } from '../../components/carousel-cards/carousel-cards';
import { CarouselBoxesComponent } from '../../components/carousel-boxes/carousel-boxes';


@Component({
  selector: 'app-main-page',
   standalone: true,
  imports: [
    // BoxComImg,
    // CarouselCards,
    // CarouselBoxesComponent
  ],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {
  
}
