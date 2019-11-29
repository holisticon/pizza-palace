import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PriceComponent } from './price.component';
import { By } from '@angular/platform-browser';

describe('PriceComponent', () => {
    let component: PriceComponent;
    let fixture: ComponentFixture<PriceComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PriceComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PriceComponent);
        component = fixture.componentInstance;
        component.price = 1.23;
        component.currency = 'USD';
        fixture.detectChanges();
    });

    it('renders a price', () => {
        const price = fixture.debugElement.query(By.css('strong')).nativeElement.textContent;

        expect(price).toBe('$1.23');
    });
});
