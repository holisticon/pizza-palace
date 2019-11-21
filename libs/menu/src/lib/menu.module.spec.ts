import { async, TestBed } from '@angular/core/testing';
import { MenuModule } from './menu.module';

describe('MenuModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MenuModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MenuModule).toBeDefined();
  });
});
