import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'pp-current-order',
    templateUrl: './current-order.component.html',
    styleUrls: ['./current-order.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrentOrderComponent {

    quantity = 0;

    totalPrice = 0;

}
