import { Component } from '@angular/core';
import { TitleMainPage } from '../titles/title-main-page/title-main-page/title-main-page';

interface Slide {
  title: string;
  subtitle: string;
}

@Component({
  selector: 'app-carousel-boxes',
  standalone: true,
  imports: [
    TitleMainPage
  ],
  templateUrl: './carousel-boxes.html',
  styleUrls: ['./carousel-boxes.scss']
})
export class CarouselBoxesComponent {

  currentIndex = 0;
  readonly step = 3;

  slides: Slide[] = [
    { title: 'Melhoria na Gestão do Ciclo de Vida', subtitle: 'Em aplicações industriais, o RFID pode monitorar o uso e as manutenções dos ativos, ajudando a programar reparos e substituições conforme necessário, prolongando a vida útil dos equipamentos.' },
    { title: 'Rastreamento em Tempo Real', subtitle: 'A tecnologia RFID permite localizar com precisão os ativos em tempo real, seja em um depósito, em trânsito ou em uma instalação. Isso melhora a eficiência operacional e reduz o tempo perdido em buscas manuais.' },
    { title: 'Automação do Inventário', subtitle: 'Com o RFID, a contagem de itens é feita automaticamente à medida que passam pelos leitores, substituindo o controle manual. Essa automação aumenta a precisão e a confiabilidade do estoque, ajudando a evitar erros de inventário e a reduzir compras excessivas.' },
    { title: 'Redução de Custos Operacionais', subtitle: 'A automação e a precisão proporcionadas pelo RFID reduzem custos e minimizam horas de trabalho manual e desperdícios, otimizando o uso dos ativos.' },
    { title: 'Redução de Perdas e Furtos', subtitle: 'A tecnologia RFID proporciona um monitoramento contínuo de inventários e ativos, dificultando furtos e perdas, problemas comuns em grandes estoques e durante movimentações. Isso garante maior segurança e controle sobre os ativos da empresa.' },
    { title: 'Escalabilidade', subtitle: 'Pronto para crescer' }
  ];

  get maxIndex() {
    return Math.max(this.slides.length - this.step, 0);
  }

  next() {
    const nextIndex = this.currentIndex + this.step;
    this.currentIndex = nextIndex <= this.maxIndex ? nextIndex : 0;
  }

  prev() {
    const prevIndex = this.currentIndex - this.step;
    this.currentIndex = prevIndex >= 0 ? prevIndex : this.maxIndex;
  }
}