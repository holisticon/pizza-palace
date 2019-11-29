import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { OrderItem, OrderPartialState, selectOrderItems, toTotalPrice } from '@pizza-palace/order-shared';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'pp-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.scss']
})
export class OrderComponent {

    orderItems: Observable<OrderItem[]>;

    totalPrice: Observable<number>;

    constructor(
        private store: Store<OrderPartialState>
    ) {
        this.orderItems = this.store.select(selectOrderItems);
        this.totalPrice = this.orderItems.pipe(
            map(toTotalPrice)
        );
    }

    onRemove(item: OrderItem) {
        console.log('Remove Item', item);
    }

    onCheckout() {
        console.log('Checkout Order');
    }
}
