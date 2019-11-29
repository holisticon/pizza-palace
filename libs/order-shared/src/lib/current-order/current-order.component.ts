import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OrderPartialState } from '../state/order.reducer';
import { selectOrderItems } from '../state/order.selectors';

@Component({
    selector: 'pp-current-order',
    templateUrl: './current-order.component.html',
    styleUrls: ['./current-order.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrentOrderComponent {

    quantity: Observable<number>;

    totalPrice: Observable<number>;

    constructor(
        private store: Store<OrderPartialState>
    ) {
        const orderItems$ = this.store.select(selectOrderItems);
        this.quantity = orderItems$.pipe(
            map(items => items.length)
        );
        this.totalPrice = orderItems$.pipe(
            map(orderItems => orderItems.reduce(
                (sum, item) => sum + item.pizza.price,
                0
            ))
        );
    }
}
