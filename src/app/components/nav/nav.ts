import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

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
    scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

