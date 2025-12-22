import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonFooter } from './button-footer';

describe('ButtonFooter', () => {
  let component: ButtonFooter;
  let fixture: ComponentFixture<ButtonFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonFooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonFooter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
