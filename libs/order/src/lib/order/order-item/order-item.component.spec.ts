import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderItemComponent } from './order-item.component';
import { OrderItem } from '@pizza-palace/order-shared';
import { PizzaSize } from '@pizza-palace/pizza-shared';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('OrderItemComponent', () => {
    let component: OrderItemComponent;
    let fixture: ComponentFixture<OrderItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OrderItemComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OrderItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('emits on onRemoveItem', () => {
        const emitSpy = spyOn(component.remove, 'emit');
        const item: OrderItem = {
            pizza: {
                image: '',
                ingredients: '',
                name: 'Salami',
                price: 1.00
            },
            size: PizzaSize.M
        };

        component.onRemoveItem(item);

        expect(emitSpy).toHaveBeenCalledWith(item);
    });
});
