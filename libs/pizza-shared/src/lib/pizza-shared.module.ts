import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PizzaComponent } from './pizza/pizza.component';
import { PriceComponent } from './price/price.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        PizzaComponent,
        PriceComponent
    ],
    exports: [
        PizzaComponent,
        PriceComponent
    ]
})
export class PizzaSharedModule {}
