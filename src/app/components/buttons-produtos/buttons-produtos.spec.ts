import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsProdutos } from './buttons-produtos';

describe('ButtonsProdutos', () => {
  let component: ButtonsProdutos;
  let fixture: ComponentFixture<ButtonsProdutos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonsProdutos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsProdutos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
