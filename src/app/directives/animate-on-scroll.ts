import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  OnDestroy,
  Renderer2,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';


@Directive({
  selector: '[appAnimateOnScroll]',
  standalone: true
})
export class AnimateOnScrollDirective implements OnInit, OnDestroy {

  @Input() direction: 'left' | 'right' | 'up' | 'down' = 'up';
  @Input() delay = 0;

  private observer?: IntersectionObserver;
  private routerSub?: Subscription;
  private isBrowser: boolean;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private router: Router,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    // 🚫 SSR: não anima, apenas mostra
    if (!this.isBrowser) {
      this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
      this.renderer.setStyle(this.el.nativeElement, 'transform', 'none');
      return;
    }

    this.setupInitialStyles();
    this.createObserver();

    // 🔁 reset ao trocar de rota
    this.routerSub = this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        this.reset();
        this.createObserver();
      });
  }

  private setupInitialStyles() {
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
    this.renderer.setStyle(
      this.el.nativeElement,
      'transform',
      this.getInitialTransform()
    );
    this.renderer.setStyle(
      this.el.nativeElement,
      'transition',
      `opacity 0.6s ease ${this.delay}ms,
       transform 0.6s ease ${this.delay}ms`
    );
  }

  private createObserver() {
    this.observer?.disconnect();

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
          this.renderer.setStyle(this.el.nativeElement, 'transform', 'translate(0, 0)');
          this.observer?.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    this.observer.observe(this.el.nativeElement);
  }

  private reset() {
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
    this.renderer.setStyle(
      this.el.nativeElement,
      'transform',
      this.getInitialTransform()
    );
  }

  private getInitialTransform(): string {
    switch (this.direction) {
      case 'left': return 'translateX(-80px)';
      case 'right': return 'translateX(80px)';
      case 'down': return 'translateY(80px)';
      default: return 'translateY(-80px)';
    }
  }

  ngOnDestroy() {
    this.observer?.disconnect();
    this.routerSub?.unsubscribe();
  }
}
