import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromOrder from './state/order.reducer';
import { OrderEffects } from './state/order.effects';
import { CurrentOrderComponent } from './current-order/current-order.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromOrder.ORDER_FEATURE_KEY, fromOrder.reducer),
    EffectsModule.forFeature([OrderEffects])
  ],
  declarations: [CurrentOrderComponent],
  exports: [CurrentOrderComponent]
})
export class OrderSharedModule {}
