import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-section',
  imports: [],
  templateUrl: './text-section.html',
  styleUrl: './text-section.scss',
})
export class TextSection {
  @Input()
  labelText:string = '';
}
