import { Component, Input } from '@angular/core';
import { AnimateOnScrollDirective } from '../../../../directives/animate-on-scroll';

@Component({
  selector: 'app-title-main-page',
  imports: [
    AnimateOnScrollDirective
  ],
  templateUrl: './title-main-page.html',
  styleUrl: './title-main-page.scss',
})
export class TitleMainPage {
  @Input()
  labelTitleMainPage:string = '';
}
