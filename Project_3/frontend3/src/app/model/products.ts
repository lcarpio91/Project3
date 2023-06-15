import { Warehouses } from "./warehouses";

export class Products {
    productId: number = 0;
    productName: string = '';
    productPrice: number = 0;
    quantity: number = 0;
    upc: string = '';
    warehouses: Warehouses = new Warehouses(0, 0);

    constructor(productId: number,
                productName: string,
                productPrice: number,
                quantity: number,
                upc: string,
                warehouses: Warehouses) {
        this.productId = productId;
        this.productName = productName;
        this.productPrice = productPrice;
        this.quantity = quantity;
        this.upc = upc;
        this.warehouses = warehouses;
}
}
