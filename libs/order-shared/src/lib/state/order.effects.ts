import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { delay, map } from 'rxjs/operators';
import { checkoutOrder, checkoutOrderSuccess } from './order.actions';

@Injectable()
export class OrderEffects {

    checkoutOrder = createEffect(() => this.actions.pipe(
        ofType(checkoutOrder),
        delay(200),
        map(() => checkoutOrderSuccess())
    ));

    constructor(
        private actions: Actions
    ) {}
}
