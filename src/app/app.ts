import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './components/footer/footer';
import { Nav } from './components/nav/nav';
import { CarouselCards } from './components/carousel-cards/carousel-cards';
import { BoxComImg } from './components/box-com-img/box-com-img';
import { CarouselBoxesComponent } from './components/carousel-boxes/carousel-boxes';
import { CarouselFuncionalidades } from './components/carousel-funcionalidades/carousel-funcionalidades';
import { ImagemSobreImagem } from './components/imagem-sobre-imagem/imagem-sobre-imagem';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Footer,
    Nav,
    // CarouselCards,
    // BoxComImg,
    // CarouselCards,
    // CarouselBoxesComponent,
    // CarouselFuncionalidades,
    // ImagemSobreImagem
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('site');
}
