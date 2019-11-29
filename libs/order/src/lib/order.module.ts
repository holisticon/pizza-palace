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
        OrderComponent
    ]
})
export class OrderModule { }
