import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CurrentOrderComponent } from './current-order.component';

describe('CurrentOrderComponent', () => {
    let component: CurrentOrderComponent;
    let fixture: ComponentFixture<CurrentOrderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CurrentOrderComponent],
            providers: [],
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
        const totalPrice = fixture.debugElement.query(By.css('strong')).nativeElement.textContent;

        expect(quantity).toBe('0 Pizzas');
        expect(totalPrice).toBe('€0.00');
    });
});
