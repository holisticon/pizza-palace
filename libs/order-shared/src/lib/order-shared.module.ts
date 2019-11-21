import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromOrder from './state/order.reducer';
import { OrderEffects } from './state/order.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromOrder.ORDER_FEATURE_KEY, fromOrder.reducer),
    EffectsModule.forFeature([OrderEffects])
  ]
})
export class OrderSharedModule {}
