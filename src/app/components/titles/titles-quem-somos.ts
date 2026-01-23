import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titles',
  imports: [],
  templateUrl: './titles-quem-somos.html',
  styleUrl: './titles-quem-somos.scss',
})
export class Titles {
  @Input()
  labelTitle:string = '';
}
