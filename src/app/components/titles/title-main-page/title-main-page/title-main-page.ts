import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-main-page',
  imports: [],
  templateUrl: './title-main-page.html',
  styleUrl: './title-main-page.scss',
})
export class TitleMainPage {
  @Input()
  labelTitleMainPage:string = '';
}
