import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { OrderItem } from '@pizza-palace/order-shared';
import { Pizza, PizzaSize } from '@pizza-palace/pizza-shared';
import { MenuListComponent } from './menu-list.component';

describe('MenuListComponent', () => {
    let component: MenuListComponent;
    let fixture: ComponentFixture<MenuListComponent>;

    const pizzas: Pizza[] = [
        {
            image: '',
            ingredients: '',
            name: 'Salami',
            price: 1.00
        },
        {
            image: '',
            ingredients: '',
            name: 'Schinken',
            price: 2.00
        },
    ];

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MenuListComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MenuListComponent);
        component = fixture.componentInstance;
        component.pizzas = pizzas;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('renders n items', () => {
        const items = fixture.debugElement.queryAll(By.css('pp-menu-item'));
        expect(items.length).toBe(pizzas.length);
    });

    it('emits on onAddToOrder', () => {
        const item: OrderItem = {
            pizza: {
                image: '',
                ingredients: '',
                name: 'Salami',
                price: 1.00
            },
            size: PizzaSize.L
        };
        const emitSpy = spyOn(component.addToOrder, 'emit');
        component.onAddToOrder(item);
        expect(emitSpy).toHaveBeenCalledWith(item);
    });
});
