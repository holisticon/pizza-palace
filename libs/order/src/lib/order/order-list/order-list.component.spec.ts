import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { OrderItem } from '@pizza-palace/order-shared';
import { PizzaSize } from '@pizza-palace/pizza-shared';
import { OrderListComponent } from './order-list.component';

describe('OrderListComponent', () => {
    let component: OrderListComponent;
    let fixture: ComponentFixture<OrderListComponent>;

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
            declarations: [OrderListComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OrderListComponent);
        component = fixture.componentInstance;
        component.orderItems = orderItems;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('renders n order items', () => {
        const items = fixture.debugElement.queryAll(By.css('pp-order-item'));
        expect(items.length).toBe(orderItems.length);
    });

    it('emits on onRemove', () => {
        const item: OrderItem = {
            pizza: {
                image: '',
                ingredients: '',
                name: 'Salami',
                price: 1.00
            },
            size: PizzaSize.L
        };
        const emitSpy = spyOn(component.remove, 'emit');
        component.onRemove(item);
        expect(emitSpy).toHaveBeenCalledWith(item);
    });
});
