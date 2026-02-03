import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-footer-contact-item',
  imports: [CommonModule],
  templateUrl: './footer-contact-item.html',
  styleUrl: './footer-contact-item.scss',
})
export class FooterContactItem {

  @Input() iconType: 'static' | 'map' = 'static';
  @Input() tooltip = '';
  @Input() lines: string[] = [];
  @Input() link?: string;

  safeSvg!: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {}

  @Input() set iconSvg(value: string) {
    if (value) {
      this.safeSvg = this.sanitizer.bypassSecurityTrustHtml(value);
    }
  }
}
