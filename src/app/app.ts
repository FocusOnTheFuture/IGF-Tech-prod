import { Component, signal, inject, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, RouterOutlet, Router } from '@angular/router';
import { Footer } from './components/footer/footer';
import { Nav } from './components/nav/nav';
import { filter } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Footer,
    Nav,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('site');

  private platformId = inject(PLATFORM_ID);

  constructor(private router: Router) {
    if (isPlatformBrowser(this.platformId)) {
      this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe(() => {
          window.scrollTo({ top: 0, behavior: 'auto' });
        });
    }
  }
}
