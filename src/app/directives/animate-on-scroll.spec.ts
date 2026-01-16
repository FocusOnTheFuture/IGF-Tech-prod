import { TestBed } from '@angular/core/testing';
import { AnimateOnScrollDirective } from './animate-on-scroll';

describe('AnimateOnScrollDirective', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AnimateOnScrollDirective],
    });
  });

  it('should create the directive', () => {
    const fixture = TestBed.createComponent(class {});
    const el = fixture.nativeElement;
    expect(el).toBeTruthy();
  });
});
