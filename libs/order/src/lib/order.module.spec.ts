import { async, TestBed } from '@angular/core/testing';
import { OrderModule } from './order.module';

describe('OrderModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [OrderModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(OrderModule).toBeDefined();
  });
});
