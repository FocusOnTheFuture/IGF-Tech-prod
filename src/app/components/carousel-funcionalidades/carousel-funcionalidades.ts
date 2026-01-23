import { Component } from '@angular/core';
import { TitleMainPage } from '../titles/title-main-page/title-main-page/title-main-page';

interface Slide {
  title: string;
  subtitle: string;
}

@Component({
  selector: 'app-carousel-funcionalidades',
  imports: [
    TitleMainPage
  ],
  templateUrl: './carousel-funcionalidades.html',
  styleUrl: './carousel-funcionalidades.scss',
})
export class CarouselFuncionalidades {
currentIndex = 0;
  readonly step = 3;

  slides: Slide[] = [
    { title: 'Gestão Eficiente Do Ciclo De Vida', subtitle: 'Com monitoramento contínuo do uso e da manutenção dos ativos, nossa solução permite programar reparos e substituições de forma otimizada, prolongando a vida útil dos equipamentos e minimizando paradas inesperadas.' },
    { title: 'Interface Amigável E Aplicativo Móvel', subtitle: 'A plataforma conta com uma interface intuitiva, que facilita a interação do usuário, e um aplicativo móvel que oferece acesso remoto para gerenciar os ativos de qualquer lugar, proporcionando conveniência e flexibilidade.' },
    { title: 'Conexão Com Nuvem (AWS 53)', subtitle: 'A integração com a nuvem (AWS 53) garante armazenamentos seguro, escalável e acessível dos dados, permitindo uma gestão de ativos ágil e eficiente, com respaldo em um sistema robusto e confiável.' },
    { title: 'Segurança de Dados', subtitle: 'Implementamos protocolos de criptografia de ponta a ponta para garantir que todas as informações críticas da sua empresa estejam protegidas contra acessos não autorizados' },
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
