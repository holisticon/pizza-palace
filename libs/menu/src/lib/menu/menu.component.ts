import { Component } from '@angular/core';
import { Pizza } from '@pizza-palace/pizza-shared';
import { Observable, of } from 'rxjs';

@Component({
    selector: 'pp-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

    pizzas: Observable<Pizza[]> = of([
        {
            name: 'Salami',
            price: 7.90,
            image: 'https://picsum.photos/50/50'
        },
        {
            name: 'Schinken',
            price: 7.90,
            image: 'https://picsum.photos/50/50'
        },
        {
            name: 'Brokkoli',
            price: 6.90,
            image: 'https://picsum.photos/50/50'
        },
    ])

}
