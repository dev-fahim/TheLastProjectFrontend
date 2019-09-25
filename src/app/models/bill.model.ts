import { MenuGET } from './menu.model';

export interface BillItemPOST {
    menu: number;
    discount: number;
    quantity: number;
}

export interface BillPOST {
    bill_data: BillItemPOST[];
    discount: number;
}

export interface BillDataGET {
    id: number;
    item: MenuGET;
    quantity: number;
    discount: number;
    added: Date;
    updated: Date;
    menu: number;
}

export interface BillGET {
    id: number;
    bill_data: BillDataGET[];
    discount: number;
    added: Date;
    updated: Date;
}

export interface BillPUT {
    discount: number;
}

export interface BillDataPUT {
    menu: number;
    quantity: number;
    discount: number;
}
