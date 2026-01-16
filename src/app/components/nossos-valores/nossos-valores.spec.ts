import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NossosValores } from './nossos-valores';

describe('NossosValores', () => {
  let component: NossosValores;
  let fixture: ComponentFixture<NossosValores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NossosValores]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NossosValores);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
