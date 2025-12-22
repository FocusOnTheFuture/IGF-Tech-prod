import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselFuncionalidades } from './carousel-funcionalidades';

describe('CarouselFuncionalidades', () => {
  let component: CarouselFuncionalidades;
  let fixture: ComponentFixture<CarouselFuncionalidades>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselFuncionalidades]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselFuncionalidades);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
