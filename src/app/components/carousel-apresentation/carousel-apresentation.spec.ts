import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselApresentation } from './carousel-apresentation';

describe('CarouselApresentation', () => {
  let component: CarouselApresentation;
  let fixture: ComponentFixture<CarouselApresentation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselApresentation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselApresentation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
