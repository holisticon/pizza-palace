import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { OrderItem } from '@pizza-palace/order-shared';
import { Pizza } from '@pizza-palace/pizza-shared';

@Component({
    selector: 'pp-menu-list',
    templateUrl: './menu-list.component.html',
    styleUrls: ['./menu-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuListComponent {

    @Input()
    pizzas: Pizza[] = [];

    @Output()
    addToOrder: EventEmitter<OrderItem> = new EventEmitter();

    onAddToOrder(item: OrderItem) {
        this.addToOrder.emit(item);
    }
}
