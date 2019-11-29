import { async, TestBed } from '@angular/core/testing';
import { OrderSharedModule } from './order-shared.module';

describe('OrderSharedModule', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [OrderSharedModule]
        }).compileComponents();
    }));

    it('should create', () => {
        expect(OrderSharedModule).toBeDefined();
    });
});
