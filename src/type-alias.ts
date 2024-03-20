export type ID = string | number;

export type Category = {
    id: "1";
    name: string;
    description?: string;
}

export type Product = {
    id: "1";
    name: string;
    price: number;
    category: Category;
    description?: string;
}
