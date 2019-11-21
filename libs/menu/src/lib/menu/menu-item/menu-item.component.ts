import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pizza, PizzaSize } from '@pizza-palace/pizza-shared';
import { OrderItem } from '@pizza-palace/order-shared';

@Component({
    selector: 'pp-menu-item',
    templateUrl: './menu-item.component.html',
    styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {

    pizzaSizes = PizzaSize;

    @Input()
    pizza: Pizza;

    @Output()
    addToOrder: EventEmitter<OrderItem> = new EventEmitter();

    onAddToOrder(pizza: Pizza, size: PizzaSize) {
        this.addToOrder.emit({
            pizza,
            size
        })
    }

}
