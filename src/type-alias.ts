export type ID = string | number;

export type Category = {
    id: "1";
    name: string;
}

export type Product = {
    id: "1";
    name: string;
    price: number;
    category: Category;
}
