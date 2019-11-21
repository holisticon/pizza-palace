import { async, TestBed } from '@angular/core/testing';
import { PizzaSharedModule } from './pizza-shared.module';

describe('PizzaSharedModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PizzaSharedModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PizzaSharedModule).toBeDefined();
  });
});
