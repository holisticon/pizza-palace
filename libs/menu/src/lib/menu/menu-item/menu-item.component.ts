import { Component, Input } from '@angular/core';
import { Pizza } from '@pizza-palace/pizza-shared';

@Component({
    selector: 'pp-menu-item',
    templateUrl: './menu-item.component.html',
    styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {

    @Input()
    pizza: Pizza;

    onAddToOrder(pizza: Pizza) {
        console.log(pizza);
    }

}
