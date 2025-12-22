import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonFooterMap } from './button-footer-map';

describe('ButtonFooterMap', () => {
  let component: ButtonFooterMap;
  let fixture: ComponentFixture<ButtonFooterMap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonFooterMap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonFooterMap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
