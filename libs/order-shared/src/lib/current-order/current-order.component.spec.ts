import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideMockStore } from '@ngrx/store/testing';
import { PizzaSize } from '@pizza-palace/pizza-shared';
import { OrderItem } from '../order.model';
import { selectOrderItems } from '../state/order.selectors';
import { CurrentOrderComponent } from './current-order.component';

describe('CurrentOrderComponent', () => {
    let component: CurrentOrderComponent;
    let fixture: ComponentFixture<CurrentOrderComponent>;

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
            declarations: [CurrentOrderComponent],
            providers: [
                provideMockStore({
                    selectors: [
                        {
                            selector: selectOrderItems,
                            value: orderItems
                        }
                    ]
                })
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CurrentOrderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('renders the current order', () => {
        const quantity = fixture.debugElement.queryAll(By.css('span'))[1].nativeElement.textContent;
        const totalPrice = fixture.debugElement.query(By.css('pp-price')).nativeElement.price;

        expect(quantity).toBe('2 Pizzas');
        expect(totalPrice).toBe(3);
    });
});
