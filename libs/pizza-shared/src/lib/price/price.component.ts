import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'pp-price',
    templateUrl: './price.component.html',
    styleUrls: ['./price.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriceComponent {

    @Input()
    price: number;

    @Input()
    currency = 'EUR';

}
