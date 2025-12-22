import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxComImg } from './box-com-img';

describe('BoxComImg', () => {
  let component: BoxComImg;
  let fixture: ComponentFixture<BoxComImg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxComImg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxComImg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
