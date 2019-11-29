import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Pizza } from '@pizza-palace/pizza-shared';
import { Subject } from 'rxjs';
import { MenuService } from '../menu.service';
import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
    let component: MenuComponent;
    let fixture: ComponentFixture<MenuComponent>;

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
});
