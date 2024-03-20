export enum CustomerType {
    EPIC = 'EPIC',
    LEGEND = 'LEGEND',
    MYTHIC = 'MYTHIC'
}
export type Customer = {
    id: number;
    name: string;
    type: CustomerType
}