import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { OrderComponent } from './order.component';
import { selectOrderItems, OrderItem, selectTotalPrice, selectIsCheckingOut, removeFromOrder, checkoutOrder } from '@pizza-palace/order-shared';
import { PizzaSize } from '@pizza-palace/pizza-shared';
import { By } from '@angular/platform-browser'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Store } from '@ngrx/store';
import { hot } from 'jasmine-marbles';

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

    it('renders n order items', () => {
        const items = fixture.debugElement.queryAll(By.css('pp-order-item'));
        expect(items.length).toBe(orderItems.length);
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

        const expected = hot('a', { a: removeFromOrder({ item })});

        expect(store.scannedActions$).toBeObservable(expected);
    });

    it('dispatches a checkoutOrder on onCheckout', () => {
        component.onCheckout();

        const expected = hot('a', { a: checkoutOrder()});

        expect(store.scannedActions$).toBeObservable(expected);
    });
});
