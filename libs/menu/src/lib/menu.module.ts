import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';

@NgModule({
    imports: [
        CommonModule,
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
    ]
})
export class MenuModule { }
