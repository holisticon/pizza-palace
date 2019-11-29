import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pizza } from '@pizza-palace/pizza-shared';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class MenuService {

    constructor(
        private httpClient: HttpClient
    ) { }

    getPizzas(): Observable<Pizza[]> {
        return this.httpClient.get<Pizza[]>('/assets/pizza.json').pipe(
            delay(200)
        );
    }
}