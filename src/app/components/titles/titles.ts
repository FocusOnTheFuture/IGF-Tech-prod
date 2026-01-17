import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titles',
  imports: [],
  templateUrl: './titles.html',
  styleUrl: './titles.scss',
})
export class Titles {
  @Input()
  labelTitle:string = '';
}
