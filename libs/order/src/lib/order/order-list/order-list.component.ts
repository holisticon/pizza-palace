import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { OrderItem } from '@pizza-palace/order-shared';

@Component({
    selector: 'pp-order-list',
    templateUrl: './order-list.component.html',
    styleUrls: ['./order-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderListComponent {

    @Input()
    orderItems: OrderItem[] = [];

    @Output()
    remove: EventEmitter<OrderItem> = new EventEmitter();

    onRemove(item: OrderItem) {
        this.remove.emit(item);
    }
}
