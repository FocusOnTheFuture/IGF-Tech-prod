import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WppButton } from './wpp-button';

describe('WppButton', () => {
  let component: WppButton;
  let fixture: ComponentFixture<WppButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WppButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WppButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
