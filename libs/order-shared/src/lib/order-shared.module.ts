import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CurrentOrderComponent } from './current-order/current-order.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        CurrentOrderComponent
    ],
    exports: [
        CurrentOrderComponent
    ]
})
export class OrderSharedModule { }
