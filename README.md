# @ngxp/pizza-palace

Go to [master](https://github.com/ngxp/pizza-palace) branch for setup instructions.

## Components

Best practices for maintainable, reusable components.

#### Keep components stateless.

👩‍🔬 [Excercise #5](https://github.com/ngxp/pizza-palace/tree/workshop/step-5)

```
git reset --hard
git clean -f -d
git checkout workshop/step-5
```

1. replace `pizzas` and `isLoading` state in `MenuComponent` with Observables

    ```ts
    pizzas: Observable<Pizza[]>;
    isLoading: Observable<boolean>;

    constructor(
        private store: Store<void>,
        private menuService: MenuService
    ) {
        this.pizzas = this.menuService.getPizzas();
        this.isLoading = this.pizzas.pipe(
            startWith(null),
            map(pizzas => pizzas === null)
        );
    }
    ```
2. use `async` pipe in template to handle subscription

👨‍🏫 [Solution #5](https://github.com/ngxp/pizza-palace/tree/workshop/step-5-solution)
