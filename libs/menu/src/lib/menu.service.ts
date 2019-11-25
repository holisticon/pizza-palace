import { Observable } from 'rxjs';
import { Pizza } from '@pizza-palace/pizza-shared';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {

    constructor(
        private httpClient: HttpClient
    ) { }

    getPizzas(): Observable<Pizza[]> {
        return this.httpClient.get<Pizza[]>('/assets/pizza.json');
    }
}
