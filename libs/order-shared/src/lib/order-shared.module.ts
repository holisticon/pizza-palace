import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PizzaSharedModule } from '@pizza-palace/pizza-shared';
import { CurrentOrderComponent } from './current-order/current-order.component';
import { OrderEffects } from './state/order.effects';
import { ORDER_FEATURE_KEY, reducer } from './state/order.reducer';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature(ORDER_FEATURE_KEY, reducer),
        EffectsModule.forFeature([OrderEffects]),
        PizzaSharedModule
    ],
    declarations: [CurrentOrderComponent],
    exports: [CurrentOrderComponent]
})
export class OrderSharedModule {}
