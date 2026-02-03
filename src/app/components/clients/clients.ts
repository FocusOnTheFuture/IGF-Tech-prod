import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  PLATFORM_ID,
  inject
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TitleMainPage } from '../titles/title-main-page/title-main-page/title-main-page';

@Component({
  selector: 'app-clients',
  imports: [
    TitleMainPage
  ],
  templateUrl: './clients.html',
  styleUrl: './clients.scss',
})
export class Clients implements AfterViewInit {

  @ViewChild('track', { static: true }) track!: ElementRef<HTMLDivElement>;

  private platformId = inject(PLATFORM_ID);

  logos: string[] = [
    'arcelorMittal.png',
    'angloGold.png',
    'equinox.png',
    'enaex.png',
    'acoforja.png',
    'cnhi.png',
    'cazanga.png',
    'edp.png',
    'brass.png',
    'elmaz.png',
    'suggar.png',
    'consominas.png',
    'smEa.png'
  ];

  ngAfterViewInit(): void {

    if (!isPlatformBrowser(this.platformId)) return;

    const trackEl = this.track.nativeElement;

    // duplica os logos
    trackEl.innerHTML += trackEl.innerHTML;

    requestAnimationFrame(() => {
      const fullWidth = trackEl.scrollWidth / 2;

      // duração proporcional (quanto maior, mais lento)
      const duration = fullWidth / 35;

      trackEl.style.setProperty('--duration', `${duration}s`);
    });
  }
}
