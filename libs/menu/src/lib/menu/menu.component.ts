import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addToOrder, OrderItem } from '@pizza-palace/order-shared';
import { Pizza } from '@pizza-palace/pizza-shared';
import { MenuService } from '../menu.service';

@Component({
    selector: 'pp-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

    pizzas: Pizza[] = [];

    isLoading = true;

    constructor(
        private store: Store<void>,
        private menuService: MenuService
    ) {
        this.menuService.getPizzas()
            .subscribe(pizzas => {
                this.isLoading = false;
                this.pizzas = pizzas;
            });
    }

    onAddToOrder(item: OrderItem) {
        this.store.dispatch(addToOrder({ item }));
    }

}
