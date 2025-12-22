import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-box-com-img',
  imports: [],
  templateUrl: './box-com-img.html',
  styleUrl: './box-com-img.scss',
})
export class BoxComImg {
  @Input()
  labelTitle:string = '';
  
  @Input()
  labelSubTitle:string = '';

  @Input() 
  imgUrl: string = ''; // Novo Input para a imagem
}
