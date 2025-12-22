import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselBoxes } from './carousel-boxes';

describe('CarouselBoxes', () => {
  let component: CarouselBoxes;
  let fixture: ComponentFixture<CarouselBoxes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselBoxes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselBoxes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
