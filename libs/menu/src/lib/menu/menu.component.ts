import { Component } from '@angular/core';
import { Pizza } from '@pizza-palace/pizza-shared';
import { Observable, of } from 'rxjs';
import { OrderItem, addToOrder } from '@pizza-palace/order-shared';
import { Store } from '@ngrx/store';
import { MenuService } from '../menu.service';
import { tap, delay } from 'rxjs/operators';

@Component({
    selector: 'pp-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

    pizzas: Observable<Pizza[]>;

    isLoading = true;

    constructor(
        private store: Store<void>,
        private menuService: MenuService
    ) {
        this.pizzas = this.menuService.getPizzas().pipe(
            tap(() => this.isLoading = false)
        );
    }

    onAddToOrder(item: OrderItem) {
        this.store.dispatch(addToOrder({ item }));
    }

}
