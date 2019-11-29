import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OrderSharedModule } from '@pizza-palace/order-shared';
import { MenuComponent } from './menu/menu.component';
import { MenuService } from './menu.service';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        OrderSharedModule,
        RouterModule.forChild([
            {
                path: '',
                pathMatch: 'full',
                component: MenuComponent
            }
        ])
    ],
    declarations: [
        MenuComponent
    ],
    providers: [MenuService]
})
export class MenuModule { }
