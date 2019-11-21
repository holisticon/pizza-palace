import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { OrderItem } from '@pizza-palace/order-shared';

@Component({
  selector: 'pp-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderItemComponent {

    @Input()
    item: OrderItem;

    @Output()
    remove: EventEmitter<OrderItem> = new EventEmitter();

    onRemoveItem(item: OrderItem) {
        this.remove.emit(item);
    }

}
