import { Component } from '@angular/core';
import { OrderItem } from '@pizza-palace/order-shared';
import { Pizza, PizzaSize } from '@pizza-palace/pizza-shared';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MenuService } from '../menu.service';

@Component({
    selector: 'pp-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

    pizzaSizes = PizzaSize;

    pizzas: Observable<Pizza[]>;

    isLoading = true;

    constructor(
        private menuService: MenuService
    ) {
        this.pizzas = this.menuService.getPizzas().pipe(
            tap(() => this.isLoading = false)
        );
    }

    onAddToOrder(item: OrderItem) {
        console.log('Add to Order', item);
    }

}
