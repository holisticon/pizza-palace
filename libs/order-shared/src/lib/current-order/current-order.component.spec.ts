import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrentOrderComponent } from './current-order.component';
import { provideMockStore } from '@ngrx/store/testing';
import { selectQuantity, selectTotalPrice } from '../state/order.selectors';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('CurrentOrderComponent', () => {
    let component: CurrentOrderComponent;
    let fixture: ComponentFixture<CurrentOrderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CurrentOrderComponent],
            providers: [
                provideMockStore({
                    selectors: [
                        {
                            selector: selectQuantity,
                            value: 1
                        },
                        {
                            selector: selectTotalPrice,
                            value: 100
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

        expect(quantity).toBe('1 Pizzas');
        expect(totalPrice).toBe(100);
    });
});
