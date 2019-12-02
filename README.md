# @ngxp/pizza-palace

Go to [master](https://github.com/ngxp/pizza-palace) branch for setup instructions.

## State Management

Domain-driven state management using NgRx.

#### Let actions reflect your domain events.

👩‍🔬 [Excercise #8](https://github.com/ngxp/pizza-palace/tree/workshop/step-8)

```
git reset --hard
git clean -f -d
git checkout workshop/step-8
```

1. add actions `removeFromOrder` and `checkoutOrder` to `order-shared` library

    ```ts
    export const removeFromOrder = createAction(
        '[Order] Remove from order',
        props<{ item: OrderItem }>()
    );

    export const checkoutOrder = createAction(
        '[Order] Checkout order'
    );
    ```

2. export actions in `index.ts`

3. dispatch actions in event handlers of `OrderComponent`

👨‍🏫 [Solution #8](https://github.com/ngxp/pizza-palace/tree/workshop/step-8-solution)
