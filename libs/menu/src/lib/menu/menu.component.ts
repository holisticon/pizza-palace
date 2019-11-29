import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addToOrder, OrderItem } from '@pizza-palace/order-shared';
import { Pizza } from '@pizza-palace/pizza-shared';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MenuService } from '../menu.service';

@Component({
    selector: 'pp-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

    pizzas: Observable<Pizza[]>;
    isLoading: Observable<boolean>;

    constructor(
        private store: Store<void>,
        private menuService: MenuService
    ) {
        this.pizzas = this.menuService.getPizzas();
        this.isLoading = this.pizzas.pipe(
            startWith(null),
            map(pizzas => pizzas === null)
        );
    }

    onAddToOrder(item: OrderItem) {
        this.store.dispatch(addToOrder({ item }));
    }

}
