import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Pizza } from '../pizza.model';
import { PizzaComponent } from './pizza.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('PizzaComponent', () => {
    let component: PizzaComponent;
    let fixture: ComponentFixture<PizzaComponent>;

    const pizza: Pizza = {
        image: '',
        ingredients: '',
        name: 'Salami',
        price: 1.00
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PizzaComponent],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PizzaComponent);
        component = fixture.componentInstance;
        component.pizza = pizza;
        fixture.detectChanges();
    });

    it('renders a pizza', () => {
        const image = fixture.debugElement.query(By.css('img')).nativeElement;
        const heading = fixture.debugElement.query(By.css('h5')).nativeElement;
        const text = fixture.debugElement.query(By.css('.text-muted')).nativeElement;
        const price = fixture.debugElement.query(By.css('pp-price')).nativeElement;

        expect(image.src).toBe(pizza.image);
        expect(heading.textContent).toBe(pizza.name);
        expect(text.textContent).toBe(pizza.ingredients);
        expect(price.price).toBe(pizza.price);
    });
});
