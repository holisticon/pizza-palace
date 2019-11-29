import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { checkoutOrder, OrderItem, removeFromOrder, selectIsCheckingOut, selectOrderItems, selectTotalPrice } from '@pizza-palace/order-shared';
import { PizzaSize } from '@pizza-palace/pizza-shared';
import { hot } from 'jasmine-marbles';
import { OrderComponent } from './order.component';

describe('OrderComponent', () => {
    let component: OrderComponent;
    let fixture: ComponentFixture<OrderComponent>;
    let store: MockStore<void>;

    const orderItems: OrderItem[] = [
        {
            pizza: {
                image: '',
                ingredients: '',
                name: 'Salami',
                price: 1.00
            },
            size: PizzaSize.M
        },
        {
            pizza: {
                image: '',
                ingredients: '',
                name: 'Schinken',
                price: 2.00
            },
            size: PizzaSize.L
        },
    ];

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OrderComponent],
            providers: [
                provideMockStore({
                    selectors: [
                        {
                            selector: selectOrderItems,
                            value: orderItems
                        },
                        {
                            selector: selectTotalPrice,
                            value: 1.00
                        },
                        {
                            selector: selectIsCheckingOut,
                            value: false
                        }
                    ]
                })
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OrderComponent);
        component = fixture.componentInstance;
        store = TestBed.get(Store);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('dispatches a removeFromOrder on onRemove', () => {
        const item: OrderItem = {
            pizza: {
                image: '',
                ingredients: '',
                name: 'Salami',
                price: 1.00
            },
            size: PizzaSize.M
        };

        component.onRemove(item);

        const expected = hot('a', { a: removeFromOrder({ item }) });

        expect(store.scannedActions$).toBeObservable(expected);
    });

    it('dispatches a checkoutOrder on onCheckout', () => {
        component.onCheckout();

        const expected = hot('a', { a: checkoutOrder() });

        expect(store.scannedActions$).toBeObservable(expected);
    });
});
