# @ngxp/pizza-palace

Go to [master](https://github.com/ngxp/pizza-palace) branch for setup instructions.

## Components

Best practices for maintainable, reusable components.

#### Keep business logic out of components.

👩‍🔬 [Excercise #6](https://github.com/ngxp/pizza-palace/tree/workshop/step-6)

```
git reset --hard
git clean -f -d
git checkout workshop/step-6
```

1. create `order.ts` in `order-shared` library and export `toTotalPrice` function

2. copy total price implementation from `OrderComponent` to `toTotalPrice`

    ```ts
    export function toTotalPrice(items: OrderItem[]) {
        return items.reduce(
            (total, item) => total + item.pizza.price,
            0
        );
    }
    ```

3. export function in index.ts

4. use function in `OrderComponent` and `CurrentOrderComponent`

👨‍🏫 [Solution #6](https://github.com/ngxp/pizza-palace/tree/workshop/step-6-solution)
