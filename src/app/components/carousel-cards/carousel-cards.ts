import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importação obrigatória
import { ButtonsProdutos } from '../buttons-produtos/buttons-produtos';
import { TitleMainPage } from '../titles/title-main-page/title-main-page/title-main-page';

interface Card {
  id: number;
  title: string;
  text: string;
  image: string;
}

@Component({
  selector: 'app-carousel-cards',
  standalone: true,
  imports: [
    CommonModule,
    ButtonsProdutos,
    TitleMainPage
  ], // Certifique-se de que está aqui
  templateUrl: './carousel-cards.html',
  styleUrls: ['./carousel-cards.scss']
})
export class CarouselCards implements OnInit {
  currentIndex = 0;
  itemsPerSlide = 3;
  slides: Card[][] = [];

  cards: Card[] = [
    { id: 1, title: 'RFIDAB-CF1', text: 'Criamos sites modernos.', image: '/Product.png' },
    { id: 2, title: 'RFIDAB-CF1', text: 'Layouts que convertem.', image: '/Product.png' },
    { id: 3, title: 'RFIDAB-CF1', text: 'Sites rápidos e leves.', image: '/Product.png' },
    { id: 4, title: 'RFIDAB-CF1', text: 'Acompanhamento contínuo.', image: '/Product.png' },
    { id: 5, title: 'RFIDAB-CF1', text: 'Segura e estável.', image: '/Product.png' },
    { id: 6, title: 'RFIDAB-CF1', text: 'Marca forte online.', image: '/Product.png' }
  ];

    ngOnInit() {
    this.updateItemsPerSlide();
  }

  @HostListener('window:resize')
  onResize() {
    this.updateItemsPerSlide();
  }

  updateItemsPerSlide() {
    const width = window.innerWidth;

    if (width < 576) {
      this.itemsPerSlide = 1;
    } else if (width < 992) {
      this.itemsPerSlide = 2;
    } else {
      this.itemsPerSlide = 3;
    }

    this.currentIndex = 0;
    this.createSlides();
  }

  createSlides() {
    this.slides = [];
    for (let i = 0; i < this.cards.length; i += this.itemsPerSlide) {
      this.slides.push(this.cards.slice(i, i + this.itemsPerSlide));
    }
  }

  next() {
    this.currentIndex =
      this.currentIndex < this.slides.length - 1 ? this.currentIndex + 1 : 0;
  }

  prev() {
    this.currentIndex =
      this.currentIndex > 0 ? this.currentIndex - 1 : this.slides.length - 1;
  }
}