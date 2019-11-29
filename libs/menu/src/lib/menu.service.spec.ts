import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { Pizza } from '@pizza-palace/pizza-shared';
import { MenuService } from './menu.service';

describe('MenuService', () => {
    let httpController: HttpTestingController;
    let service: MenuService;

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

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                MenuService
            ]
        });

        httpController = TestBed.get(HttpTestingController);
        service = TestBed.get(MenuService);
    });


    it('should create', () => {
        expect(service).toBeTruthy();
    });

    it('loads the pizzas from pizza.json', () => {
        service.getPizzas().subscribe(res => {
            expect(res).toBe(pizzas);
        });

        const request = httpController.expectOne('/assets/pizza.json');

        expect(request.request.method).toBe('GET');

        request.flush(pizzas);

        httpController.verify();
    });
});
