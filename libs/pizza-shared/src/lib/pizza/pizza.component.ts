import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Pizza } from '../pizza.model';

@Component({
  selector: 'pp-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PizzaComponent {

    @Input()
    pizza: Pizza;

}
