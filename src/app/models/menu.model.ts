export interface MenuGET {
    id?: number;
    name: string;
    price: number;
    added?: Date;
    updated?: Date;
    main_user?: number;
}

export interface MenuPost {
    name: string;
    price: number;
}
