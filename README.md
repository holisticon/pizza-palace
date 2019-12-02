# @ngxp/pizza-palace

Go to [master](https://github.com/ngxp/pizza-palace) branch for setup instructions.

## Crash Course

Add components and setup routing.

👩‍🔬 [Excercise #0](https://github.com/ngxp/pizza-palace/tree/workshop/step-0)

```
git reset --hard
git checkout workshop/step-0
```

1. create a `MenuComponent` and add to `AppComponent`

    ```sh
    npm run ng -- generate component menu
    ```

    ```html
    <pp-menu></pp-menu>
    ```

2. add a title

    ```html
    <div class="row justify-content-between align-items-center m-0 my-4">
        <h1 class="m-0">Menu</h1>
    </div>
    ```

3. create a `Pizza` interface in `apps/pizza-palace/src/app/pizza/pizza.model.ts` that describes this pizza sample data:

    ```ts
    {
        name: 'Pizza Olive',
        price: 7.90,
        image: '/assets/pizza-olive.jpg',
        ingredients: 'Olives, Bacon, Cheese, Tomato sauce'
    }
    ```

4. create an array of pizzas in `apps/pizza-palace/src/app/pizza/pizza.data.ts`

    ```ts
    export const pizzas: Pizza[] = [
        {
            name: 'Pizza Olive',
            price: 7.9,
            image: '/assets/pizza-olive.jpg',
            ingredients: 'Olives, Bacon, Cheese, Tomato sauce'
        },
        {
            name: 'Pizza Aspargus',
            price: 7.9,
            image: '/assets/pizza-aspargus.jpg',
            ingredients: 'Aspargus, Bacon, Onions, Corn, Cheese, Tomato sauce'
        },
        {
            name: 'Pizza BBQ',
            price: 6.9,
            image: '/assets/pizza-barbecue.jpg',
            ingredients:
                'Barbecue sauce, Sauce Hollandaise, Cheese, Tomato sauce'
        }
    ];
    ```

5. add pizza to the `MenuComponent` state

    ```ts
    pizzas: Pizza[] = pizzas;
    ```

6. render the pizzas in the component template

    ```html
    <ul class="list-unstyled">
        <li class="mb-3" *ngFor="let pizza of pizzas">
            <div class="card shadow-sm">
                <div
                    class="card-body row justify-content-between align-items-center m-0"
                >
                    <div class="col-8 media">
                        <img
                            [src]="pizza.image"
                            class="mr-3 rounded"
                            [alt]="pizza.name"
                            height="80"
                        />
                        <div class="media-body">
                            <h5 class="m-0">{{ pizza.name }}</h5>
                            <small class="text-muted"
                                >{{ pizza.ingredients }}</small
                            >
                            <strong class="d-block"
                                >{{ pizza.price | currency:'EUR' }}</strong
                            >
                        </div>
                    </div>
                </div>
            </div>
        </li>
    </ul>
    ```

7. add buttons to add pizzas in three different sizes to the order as a child of the `div.card-body` element

    ```html
    <div class="col-4 text-right">
        <div class="btn-group shadow-sm" role="group">
            <button
                class="btn btn-outline-danger"
                (click)="onAddToOrder({ pizza: pizza, size: 's' })"
            >
                S
            </button>
            <button
                class="btn btn-outline-danger"
                (click)="onAddToOrder({ pizza: pizza, size: 'm' })"
            >
                M
            </button>
            <button
                class="btn btn-outline-danger"
                (click)="onAddToOrder({ pizza: pizza, size: 'l' })"
            >
                L
            </button>
        </div>
    </div>
    ```

8. add an event handler to the `MenuComponent` that handles clicks of the button

    ```ts
    onAddToOrder(item: any) {
        console.log('Add to Order', item);
    }
    ```

👨‍🏫 [Solution #0](https://github.com/ngxp/pizza-palace/tree/workshop/step-0-solution)
