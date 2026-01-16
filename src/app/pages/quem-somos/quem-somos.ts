import { Component } from '@angular/core';
import { SobreNos } from '../../components/sobre-nos/sobre-nos';
import { Missao } from '../../components/missao/missao';
import { NossosValores } from '../../components/nossos-valores/nossos-valores';

@Component({
  selector: 'app-quem-somos',
  imports: [
    SobreNos,
    Missao,
    NossosValores
  ],
  templateUrl: './quem-somos.html',
  styleUrl: './quem-somos.scss',
})
export class QuemSomos {

}
