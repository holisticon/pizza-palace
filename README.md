# @ngxp/pizza-palace

Go to [master](https://github.com/ngxp/pizza-palace) branch for setup instructions.

## State Management

Domain-driven state management using NgRx.

#### Use selectors to create projections of your state.

👩‍🔬 [Excercise #7](https://github.com/ngxp/pizza-palace/tree/workshop/step-7)

```
git reset --hard
git clean -f -d
git checkout workshop/step-7
```

1. add selectors `selectTotalPrice` and `selectQuantity` to `order-shared` library

    ```ts
    export const selectTotalPrice = createSelector(
        selectOrderItems,
        items => toTotalPrice(items)
    );

    export const selectQuantity = createSelector(
        selectOrderItems,
        items => items.length
    );
    ```

2. export selectors in `index.ts`

3. use selectors in `CurrentOrderComponent` and `OrderComponent`

👨‍🏫 [Solution #7](https://github.com/ngxp/pizza-palace/tree/workshop/step-7-solution)
