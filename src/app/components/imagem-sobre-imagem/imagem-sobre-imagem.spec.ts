import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagemSobreImagem } from './imagem-sobre-imagem';

describe('ImagemSobreImagem', () => {
  let component: ImagemSobreImagem;
  let fixture: ComponentFixture<ImagemSobreImagem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagemSobreImagem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagemSobreImagem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
