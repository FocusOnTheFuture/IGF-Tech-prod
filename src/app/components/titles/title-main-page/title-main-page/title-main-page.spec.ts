import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleMainPage } from './title-main-page';

describe('TitleMainPage', () => {
  let component: TitleMainPage;
  let fixture: ComponentFixture<TitleMainPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleMainPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleMainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
