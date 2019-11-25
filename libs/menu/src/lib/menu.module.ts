import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';
import { PizzaSharedModule } from '@pizza-palace/pizza-shared';
import { OrderSharedModule } from '@pizza-palace/order-shared';
import { MenuService } from './menu.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule.forChild([
            {
                path: '',
                pathMatch: 'full',
                component: MenuComponent
            }
        ]),
        PizzaSharedModule,
        OrderSharedModule
    ],
    declarations: [MenuComponent, MenuItemComponent],
    providers: [MenuService]
})
export class MenuModule { }
