import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { ActionReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
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
        StoreModule.forRoot({}, {
            metaReducers,
            runtimeChecks: {
                strictActionImmutability: true,
                strictActionSerializability: true,
                strictStateImmutability: true,
                strictStateSerializability: true
            }
        }),
        EffectsModule.forRoot([]),
        StoreDevtoolsModule.instrument({
            logOnly: environment.production
          }),
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
