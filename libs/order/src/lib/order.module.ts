import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { OrderItemComponent } from './order/order-item/order-item.component';
import { PizzaSharedModule } from '@pizza-palace/pizza-shared';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
       {path: '', pathMatch: 'full', component: OrderComponent}
    ]),
    PizzaSharedModule
  ],
  declarations: [OrderComponent, OrderItemComponent]
})
export class OrderModule {}
