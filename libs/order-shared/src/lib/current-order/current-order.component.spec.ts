import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentOrderComponent } from './current-order.component';
import { provideMockStore } from '@ngrx/store/testing';
import { selectQuantity, selectTotalPrice } from '../state/order.selectors';

describe('CurrentOrderComponent', () => {
    let component: CurrentOrderComponent;
    let fixture: ComponentFixture<CurrentOrderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CurrentOrderComponent],
            providers: [
                provideMockStore({
                    selectors: [
                        {
                            selector: selectQuantity,
                            value: 1
                        },
                        {
                            selector: selectTotalPrice,
                            value: 100
                        }
                    ]
                })
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CurrentOrderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
