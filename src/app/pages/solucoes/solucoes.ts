import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TitleMainPage } from '../../components/titles/title-main-page/title-main-page/title-main-page';
import { TextSection } from '../../components/text-section/text-section';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll';

@Component({
  selector: 'app-solucoes',
  imports: [
    TitleMainPage,
    TextSection,
    AnimateOnScrollDirective
  ],
  templateUrl: './solucoes.html',
  styleUrl: './solucoes.scss',
})
export class Solucoes implements AfterViewInit {

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit(): void {

    // 🚨 Garante que só roda no browser
    if (!isPlatformBrowser(this.platformId)) return;

    // 🚨 Garante que o browser suporta IntersectionObserver
    if (!('IntersectionObserver' in window)) return;

    const elements = this.el.nativeElement.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            obs.unobserve(entry.target); // anima apenas uma vez
          }
        });
      },
      {
        threshold: 0.25
      }
    );

    elements.forEach((el: HTMLElement) => observer.observe(el));
  }
}
