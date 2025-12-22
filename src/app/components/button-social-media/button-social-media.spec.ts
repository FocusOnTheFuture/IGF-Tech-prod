import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSocialMedia } from './button-social-media';

describe('ButtonSocialMedia', () => {
  let component: ButtonSocialMedia;
  let fixture: ComponentFixture<ButtonSocialMedia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonSocialMedia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonSocialMedia);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
