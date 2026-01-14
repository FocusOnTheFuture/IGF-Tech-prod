import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel-apresentation',
  imports: [],
  templateUrl: './carousel-apresentation.html',
  styleUrl: './carousel-apresentation.scss',
})
export class CarouselApresentation {
  currentIndex = 0;

  slides = [
    {
      title: 'Rastreamento Inteligente de Ativos com Tecnologia UHF',
      description: 'Visibilidade em tempo real, inventário automatizado e redução de perdas.',
      buttonText: 'Orçamento',
      image: '/rastreamento.jpeg',
      action: () => this.onClick('site')
    },
    {
      title: 'Segurança Inteligente para Pessoas e Processos',
      description: 'Controle de acesso com verificação automática de treinamentos.',
      buttonText: 'Soluções',
      image: '/qualidade.jpeg',
      action: () => this.onClick('portfolio')
    },
    {
      title: 'Controle de Acesso em Subestações Elétricas',
      description: 'Acesso liberado somente para eletricistas NR10.',
      buttonText: 'Fale conosco',
      image: '/controle.jpeg',
      action: () => this.onClick('contato')
    }
  ];

  next() {
    this.currentIndex =
      this.currentIndex < this.slides.length - 1 ? this.currentIndex + 1 : 0;
      console.log('Cliquei no next')
  }

  prev() {
    this.currentIndex =
      this.currentIndex > 0 ? this.currentIndex - 1 : this.slides.length - 1;
  }

  onClick(type: string) {
    console.log('Botão clicado:', type);
    // futuramente:
    // this.router.navigate(['/contato'])
  }
}
