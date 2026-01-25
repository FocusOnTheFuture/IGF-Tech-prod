import { 
  Component, 
  ElementRef,
  ViewChild,
  AfterViewInit,
  HostListener 
} from '@angular/core';

@Component({
  selector: 'app-imagem-sobre-imagem',
  imports: [],
  templateUrl: './imagem-sobre-imagem.html',
  styleUrl: './imagem-sobre-imagem.scss',
})

export class ImagemSobreImagem implements AfterViewInit {

  @ViewChild('revealSection') revealSection!: ElementRef<HTMLElement>;
  @ViewChild('slidingImg') slidingImg!: ElementRef<HTMLElement>;

  private efeitoFinalizado = false;

  ngAfterViewInit(): void {
    // Garante que o DOM já foi carregado
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (this.efeitoFinalizado) return;

    if (window.innerWidth <= 576) {
      this.efeitoFinalizado = true;
      return;
    }

    const section = this.revealSection.nativeElement;
    const image = this.slidingImg.nativeElement;

    const rect = section.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top <= windowHeight * 0.7) {
      image.style.transform = 'translateX(-100%)';
      this.efeitoFinalizado = true;
    }
  }
}
