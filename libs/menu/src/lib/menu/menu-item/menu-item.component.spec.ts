import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemComponent } from './menu-item.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PizzaSize, Pizza } from '@pizza-palace/pizza-shared';

describe('MenuItemComponent', () => {
    let component: MenuItemComponent;
    let fixture: ComponentFixture<MenuItemComponent>;

    const pizza: Pizza = {
        image: '',
        ingredients: '',
        name: 'Salami',
        price: 1.00
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MenuItemComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MenuItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('emits on onAddToOrder', () => {
        const emitSpy = spyOn(component.addToOrder, 'emit');
        const size = PizzaSize.M;
        component.onAddToOrder(pizza, size);

        expect(emitSpy).toHaveBeenCalledWith({ pizza, size });
    });
});
