import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
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

    onRemoveItem(item: OrderItem) {
        console.log(item);
    }

}
