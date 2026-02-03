import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterContactItem } from './footer-contact-item';

describe('FooterContactItem', () => {
  let component: FooterContactItem;
  let fixture: ComponentFixture<FooterContactItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterContactItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterContactItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
