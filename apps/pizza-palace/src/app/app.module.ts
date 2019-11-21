import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'menu'
            },
            {
                path: 'menu',
                loadChildren: () => import('@pizza-palace/menu').then(m => m.MenuModule)
            },
            {
                path: 'order',
                loadChildren: () => import('@pizza-palace/order').then(m => m.OrderModule)
            }
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
