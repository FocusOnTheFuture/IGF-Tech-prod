import { Component, Input } from '@angular/core';
import { AnimateOnScrollDirective } from '../../directives/animate-on-scroll';

@Component({
  selector: 'app-titles',
  imports: [
    AnimateOnScrollDirective
  ],
  templateUrl: './titles-quem-somos.html',
  styleUrl: './titles-quem-somos.scss',
})
export class Titles {
  @Input()
  labelTitle:string = '';
}
