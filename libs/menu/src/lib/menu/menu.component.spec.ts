import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { addToOrder, OrderItem } from '@pizza-palace/order-shared';
import { Pizza, PizzaSize } from '@pizza-palace/pizza-shared';
import { hot } from 'jasmine-marbles';
import { Subject } from 'rxjs';
import { MenuService } from '../menu.service';
import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
    let component: MenuComponent;
    let fixture: ComponentFixture<MenuComponent>;
    let store: MockStore<void>;

    const pizzasSubject = new Subject<Pizza[]>();

    const mockMenuService: Partial<MenuService> = {
        getPizzas: () => pizzasSubject
    };

    const pizzas: Pizza[] = [
        {
            image: '',
            ingredients: '',
            name: 'Salami',
            price: 1.00
        }
    ];

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MenuComponent],
            providers: [
                provideMockStore(),
                {
                    provide: MenuService,
                    useValue: mockMenuService
                }
            ],
            schemas: [
                CUSTOM_ELEMENTS_SCHEMA
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MenuComponent);
        component = fixture.componentInstance;
        store = TestBed.get(Store);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('isLoading', () => {
        it('is true initially', () => {
            expect(component.isLoading).toBe(true);
        });
        it('is false when pizzas are loaded', fakeAsync(() => {
            pizzasSubject.next(pizzas);
            tick();
            expect(component.isLoading).toBe(false);
        }));
    });

    it('dispatches a addToOrder on onAddToOrder', () => {
        const item: OrderItem = {
            pizza: {
                image: '',
                ingredients: '',
                name: 'Salami',
                price: 1.00
            },
            size: PizzaSize.M
        };

        component.onAddToOrder(item);

        const expected = hot('a', { a: addToOrder({ item }) });

        expect(store.scannedActions$).toBeObservable(expected);
    });
});
