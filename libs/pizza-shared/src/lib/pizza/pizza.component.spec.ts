import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PizzaComponent } from './pizza.component';
import { Pizza } from '../pizza.model';


describe('PizzaComponent', () => {
    let component: PizzaComponent;
    let fixture: ComponentFixture<PizzaComponent>;

    const pizza: Pizza = {
        image: '',
        ingredients: '',
        name: 'Salami',
        price: 1.00
    }

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PizzaComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PizzaComponent);
        component = fixture.componentInstance;
        component.pizza = pizza;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
