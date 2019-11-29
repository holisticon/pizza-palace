import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CurrentOrderComponent } from '@pizza-palace/order';
import { MenuComponent } from './menu/menu.component';

@NgModule({
    imports: [
        CommonModule,

        // importing the OrderModule breaks routing 💣
        // OrderModule,

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

        // dirty hack 🪓
        // don't do this in production
        CurrentOrderComponent
    ]
})
export class MenuModule { }
