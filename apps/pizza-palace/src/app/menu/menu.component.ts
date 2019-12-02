import { Component } from '@angular/core';
import { pizzas } from '../pizza/pizza.data';
import { Pizza } from '../pizza/pizza.model';

@Component({
    selector: 'pp-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

    pizzas: Pizza[] = pizzas;

    onAddToOrder(item: any) {
        console.log('Add to Order', item);
    }

}
