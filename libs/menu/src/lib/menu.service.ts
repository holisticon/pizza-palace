import { Observable } from 'rxjs';
import { Pizza } from '@pizza-palace/pizza-shared';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
