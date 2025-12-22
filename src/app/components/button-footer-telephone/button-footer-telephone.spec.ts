import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonFooterTelephone } from './button-footer-telephone';

describe('ButtonFooterTelephone', () => {
  let component: ButtonFooterTelephone;
  let fixture: ComponentFixture<ButtonFooterTelephone>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonFooterTelephone]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonFooterTelephone);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
