import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel-apresentation',
  templateUrl: './carousel-apresentation.html',
  styleUrl: './carousel-apresentation.scss',
})
export class CarouselApresentation {
  constructor(private router: Router) {}
  currentIndex = 0;

  slides = [
    {
      title: 'Rastreamento Inteligente de Ativos com Tecnologia UHF',
      description: 'Visibilidade em tempo real, inventário automatizado e redução de perdas.',
      buttonText: 'Orçamento',
      image: '/rastreamento.jpeg',
      route: '/contatos'
    },
    {
      title: 'Segurança Inteligente para Pessoas e Processos',
      description: 'Controle de acesso com verificação automática de treinamentos.',
      buttonText: 'Soluções',
      image: '/qualidade.jpeg',
      route: '/solucoes'
    },
    {
      title: 'Controle de Acesso em Subestações Elétricas',
      description: 'Acesso liberado somente para eletricistas NR10.',
      buttonText: 'Fale conosco',
      image: '/controle.jpeg',
      externalUrl: 'https://wa.me/5531999926910?text=Olá,%20gostaria%20de%20mais%20informações!'
    }
  ];

  next() {
    this.currentIndex =
      this.currentIndex < this.slides.length - 1 ? this.currentIndex + 1 : 0;
  }

  prev() {
    this.currentIndex =
      this.currentIndex > 0 ? this.currentIndex - 1 : this.slides.length - 1;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  onClick(slide: any) {
      if (slide.route) {
        this.router.navigate([slide.route]);
      }

    if (slide.externalUrl) {
      window.open(slide.externalUrl, '_blank');
    }
  }
}
