import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OrderComponent } from './order/order.component';

@NgModule({
    imports: [
        CommonModule,
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
        // it's not possible to declare a component twice 💣
        // CurrentOrderComponent
    ],
    exports: [
        // CurrentOrderComponent
    ]
})
export class OrderModule { }
