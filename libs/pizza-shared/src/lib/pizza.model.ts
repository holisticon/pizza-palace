export interface Pizza {
    name: string;
    price: number;
    image: string;
    ingredients: string;
}

export enum PizzaSize {
    S = 's',
    M = 'm',
    L = 'l'
}
