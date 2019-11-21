import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { OrderPartialState } from '../state/order.reducer';
import { selectQuantity, selectTotalPrice } from '../state/order.selectors';

@Component({
    selector: 'pp-current-order',
    templateUrl: './current-order.component.html',
    styleUrls: ['./current-order.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrentOrderComponent {

    quantity: Observable<number>;

    totalPrice: Observable<number>

    constructor(
        private store: Store<OrderPartialState>
    ) {
        this.quantity = this.store.select(selectQuantity);
        this.totalPrice = this.store.select(selectTotalPrice);
    }
}
