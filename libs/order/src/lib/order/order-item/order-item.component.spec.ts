import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderItem } from '@pizza-palace/order-shared';
import { PizzaSize } from '@pizza-palace/pizza-shared';
import { OrderItemComponent } from './order-item.component';

describe('OrderItemComponent', () => {
    let component: OrderItemComponent;
    let fixture: ComponentFixture<OrderItemComponent>;
    const item: OrderItem = {
        pizza: {
            image: '',
            ingredients: '',
            name: 'Salami',
            price: 1.00
        },
        size: PizzaSize.M
    };

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
        component.item = item;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('emits on onRemoveItem', () => {
        const emitSpy = spyOn(component.remove, 'emit');

        component.onRemoveItem(item);

        expect(emitSpy).toHaveBeenCalledWith(item);
    });
});
