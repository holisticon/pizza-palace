import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';
import { PizzaSharedModule } from '@pizza-palace/pizza-shared';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                pathMatch: 'full',
                component: MenuComponent
            }
        ]),
        PizzaSharedModule
    ],
    declarations: [MenuComponent, MenuItemComponent]
})
export class MenuModule { }
