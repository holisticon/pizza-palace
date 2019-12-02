# @ngxp/pizza-palace

Go to [master](https://github.com/ngxp/pizza-palace) branch for setup instructions.

## Modularization

Modularization of Angular projects using Nx Workspace.

#### Modularize your project using libraries and keep your application lean.

👩‍🔬 [Excercise #1](https://github.com/ngxp/pizza-palace/tree/workshop/step-1)

```
git reset --hard
git checkout workshop/step-1
```

1. create libraries for `menu`, `order`, `pizza-shared`

    ```sh
    npm run ng -- generate library menu --style scss
    npm run ng -- generate library order --style scss
    npm run ng -- generate library pizza-shared --style scss
    ```

2. prepare `menu` library

    1. move folder `apps/pizza-palace/src/app/menu` to `libs/menu/src/lib`
    2. export `MenuComponent` from `index.ts`
    3. add `MenuComponent` to declarations in `MenuModule`

3. prepare `order` library

    1. move folder `apps/pizza-palace/src/app/order` to `libs/order/src/lib`
    2. export `OrderComponent` and `OrderItem` from `index.ts`
    3. add `OrderComponent` to declarations in `OrderModule`

4. prepare `pizza-shared` library

    1. move files `apps/pizza-palace/src/app/pizza/**` to `libs/pizza-shared/src/lib`
    2. export `Pizza`, `PizzaSize` and `pizzas` from `index.ts`

5. update imports in

    - `app.module.ts`
    - `menu.component.ts`
    - `order.component.ts`
    - `order.model.ts`

6. remove component declarations from `AppModule`

7. add imports for `MenuModule` and `OrderModule` to `AppModule`

👨‍🏫 [Solution #1](https://github.com/ngxp/pizza-palace/tree/workshop/step-1-solution)
