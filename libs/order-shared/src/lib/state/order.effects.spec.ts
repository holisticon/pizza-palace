import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Observable } from 'rxjs';
import { OrderEffects } from './order.effects';
import { hot } from 'jest-marbles';
import { checkoutOrder, checkoutOrderSuccess } from './order.actions';
import { TestScheduler } from 'rxjs/internal/testing/TestScheduler';

describe('OrderEffects', () => {
    let actions: Observable<any>;
    let effects: OrderEffects;
    let testScheduler: TestScheduler;

    beforeEach(() => {
        testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
        });

        TestBed.configureTestingModule({
            providers: [
                OrderEffects,
                provideMockActions(() => actions),
            ]
        });

        effects = TestBed.get(OrderEffects);
    });

    describe('checkoutOrder', () => {
        it('returns checkoutOrderSuccess after 2 seconds', () => {
            testScheduler.run(({ cold, expectObservable }) => {
                    actions = cold('a', { a: checkoutOrder() });

                expectObservable(effects.checkoutOrder).toBe(
                    '2s a',
                    { a: checkoutOrderSuccess() }
                )
            });
        });
    });
});
