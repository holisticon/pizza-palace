# @ngxp/pizza-palace

Go to [master](https://github.com/ngxp/pizza-palace) branch for setup instructions.

## Modularization

Modularization of Angular projects using Nx Workspace.

#### Separate lazy-loaded feature libraries from shared libraries, even if they cover the same domain.

👩‍🔬 [Excercise #3](https://github.com/ngxp/pizza-palace/tree/workshop/step-3)

```
git reset --hard
git clean -f -d
git checkout workshop/step-3
```

1. create library for `order-shared`

    ```sh
    npm run ng -- generate library order-shared --style scss
    ```

2. prepare `order-shared` library
    1. move folder `libs/order/src/lib/current-order` to `libs/order-shared/src/lib`
    2. move file `libs/order/src/lib/order.model.ts` to `libs/order-shared/src/lib`
    3. add declaration and export for `CurrentOrderComponent` to `OrderSharedModule`
    4. export `OrderItem` in `index.ts`

3. remove `OrderItem` export from `index.ts`

3. import `OrderSharedModule` in `app.module.ts` and remove `CurrentOrderComponent` declaration

4. update import in `menu.component.ts` and `order.component.ts`

👨‍🏫 [Solution #3](https://github.com/ngxp/pizza-palace/tree/workshop/step-3-solution)
