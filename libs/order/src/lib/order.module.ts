import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OrderSharedModule } from '@pizza-palace/order-shared';
import { PizzaSharedModule } from '@pizza-palace/pizza-shared';
import { OrderItemComponent } from './order/order-item/order-item.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { OrderComponent } from './order/order.component';

@NgModule({
    imports: [
        CommonModule,
        PizzaSharedModule,
        OrderSharedModule,
        RouterModule.forChild([
            {
                path: '',
                pathMatch: 'full',
                component: OrderComponent
            }
        ])
    ],
    declarations: [
        OrderComponent,
        OrderItemComponent,
        OrderListComponent
    ]
})
export class OrderModule { }
