import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addToOrder, OrderItem } from '@pizza-palace/order-shared';
import { Pizza } from '@pizza-palace/pizza-shared';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MenuService } from '../menu.service';

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
