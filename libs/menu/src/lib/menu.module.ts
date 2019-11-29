import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OrderSharedModule } from '@pizza-palace/order-shared';
import { PizzaSharedModule } from '@pizza-palace/pizza-shared';
import { MenuService } from './menu.service';
import { LoadingSpinnerComponent } from './menu/loading-spinner/loading-spinner.component';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';
import { MenuListComponent } from './menu/menu-list/menu-list.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        OrderSharedModule,
        PizzaSharedModule,
        RouterModule.forChild([
            {
                path: '',
                pathMatch: 'full',
                component: MenuComponent
            }
        ])
    ],
    declarations: [
        MenuComponent,
        MenuItemComponent,
        MenuListComponent,
        LoadingSpinnerComponent
    ],
    providers: [MenuService]
})
export class MenuModule { }
