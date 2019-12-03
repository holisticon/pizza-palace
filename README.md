# @ngxp/pizza-palace

Go to [master](https://github.com/ngxp/pizza-palace) branch for setup instructions.

## Components

Best practices for maintainable, reusable components.

#### Keep components small.

👩‍🔬 [Excercise #4](https://github.com/ngxp/pizza-palace/tree/workshop/step-4)

```
git reset --hard
git clean -f -d
git checkout workshop/step-4
```

1. create `LoadingSpinnerComponent` in `menu` library

    ```sh
    npm run ng -- generate component loading-spinner --project menu
    ```

2. move `div.d-flex.justify-content-center` from `menu.component.html` to `LoadingSpinnerComponent`

3. repeat steps 1 and 2 for `MenuListComponent` with `ul.list-unstyled` and add the appropriate inputs and outputs

    ```ts
    @Input()
    pizzas: Pizza[] = [];

    @Output()
    addToOrder: EventEmitter<OrderItem> = new EventEmitter();

    onAddToOrder(item: OrderItem) {
        this.addToOrder.emit(item);
    }
    ```

4. repeat steps 1 and 2 for `MenuItemComponent` with `div.card.shadow-sm` from `MenuListComponent` and add the appropriate inputs and outputs

    ```ts
    pizzaSizes = PizzaSize;

    @Input()
    pizza: Pizza;

    @Output()
    addToOrder: EventEmitter<OrderItem> = new EventEmitter();

    onAddToOrder(pizza: Pizza, size: PizzaSize) {
        this.addToOrder.emit({
            pizza,
            size
        })
    }
    ```

5. use `<pp-pizza>` to render pizza information in `MenuItemComponent`

    ```html
    <pp-pizza class="col-8" [pizza]="pizza"></pp-pizza>
    ```
6. use 

7. use `<pp-loading-spinner>` and `<pp-menu-list>` in `MenuComponent`

8. use `<pp-menu-item>` in `MenuListComponent`

**👩‍💻 Bonus Points 🤓**

Refactor `OrderComponent` into `OrderItemComponent` and `OrderListComponent`. Use `<pp-price>` to render the total price.

```html
<div>
    Total:
    <pp-price [price]="totalPrice"></pp-price>
</div>
```

👨‍🏫 [Solution #4](https://github.com/ngxp/pizza-palace/tree/workshop/step-4-solution)
