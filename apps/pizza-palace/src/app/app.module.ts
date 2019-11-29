import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ActionReducer } from '@ngrx/store';
import { MenuComponent, MenuModule } from '@pizza-palace/menu';
import { OrderComponent, OrderModule } from '@pizza-palace/order';
import { storeLogger } from 'ngrx-store-logger';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';

export function logger(reducer: ActionReducer<any>): any {
    // default, no options
    return storeLogger()(reducer);
  }

  export const metaReducers = environment.production ? [] : [logger];

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent
    ],
    imports: [
        BrowserModule,
        MenuModule,
        OrderModule,
        RouterModule.forRoot([
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'menu'
            },
            {
                path: 'menu',
                component: MenuComponent
            },
            {
                path: 'order',
                component: OrderComponent
            }
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
