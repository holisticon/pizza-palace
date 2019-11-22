import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { checkoutOrder, checkoutOrderSuccess } from './order.actions';
import { delay, map } from 'rxjs/operators';

@Injectable()
export class OrderEffects {

    checkoutOrder = createEffect(() => this.actions.pipe(
        ofType(checkoutOrder),
        delay(2000),
        map(() => checkoutOrderSuccess())
    ))

  constructor(private actions: Actions) {}
}
