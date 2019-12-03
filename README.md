# @ngxp/pizza-palace

Go to [master](https://github.com/ngxp/pizza-palace) branch for setup instructions.

## Modularization

Modularization of Angular projects using Nx Workspace.

#### Delegate routes to lazy-loaded feature libraries.

👩‍🔬 [Excercise #2](https://github.com/ngxp/pizza-palace/tree/workshop/step-2)

```
git reset --hard
git clean -f -d
git checkout workshop/step-2
```

1. import `RouterModule` and add route configuration in `MenuModule`

    ```ts
    RouterModule.forChild([
        {
            path: '',
            pathMatch: 'full',
            component: MenuComponent
        }
    ])
    ```

2. lazy-load `MenuModule` in `AppModule`

    ```ts
        {
            path: 'menu',
            loadChildren: () => import('@pizza-palace/menu').then(m => m.MenuModule)
        },
    ```

3. remove `MenuComponent` export from `index.ts`

4. repeat for `OrderModule`

👨‍🏫 [Solution #2](https://github.com/ngxp/pizza-palace/tree/workshop/step-2-solution)
