import { Component, Input } from '@angular/core';
import { Pizza, PizzaSize } from '@pizza-palace/pizza-shared';

@Component({
    selector: 'pp-menu-item',
    templateUrl: './menu-item.component.html',
    styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {

    pizzaSizes = PizzaSize;

    @Input()
    pizza: Pizza;

    onAddToOrder(pizza: Pizza, size: PizzaSize) {
        console.log({ pizza, size });
    }

}
