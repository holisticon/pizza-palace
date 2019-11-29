import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { checkoutOrder, OrderItem, OrderPartialState, removeFromOrder, selectOrderItems, selectTotalPrice } from '@pizza-palace/order-shared';
import { Observable } from 'rxjs';

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
        this.totalPrice = this.store.select(selectTotalPrice);
    }

    onRemove(item: OrderItem) {
        this.store.dispatch(removeFromOrder({ item }));
    }

    onCheckout() {
        this.store.dispatch(checkoutOrder());
    }
}
