import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './nav.html',
  styleUrls: ['./nav.scss']
})
export class Nav {

  menuOpen = false;
  touchStartX = 0;
  currentRoute = '';

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentRoute = event.urlAfterRedirects;
      });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  onNavigate() {
    this.menuOpen = false;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* Swipe para fechar */
  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].clientX;
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent) {
    const touchEndX = event.changedTouches[0].clientX;
    if (this.touchStartX - touchEndX > 80) {
      this.closeMenu();
    }
  }

  /* Rotas onde o botão NÃO deve aparecer */
  hideCTA(): boolean {
    return this.currentRoute.includes('/contatos')
        || this.currentRoute.includes('/orcamento')
        || this.currentRoute.includes('/formulario');
  }
}
