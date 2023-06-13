export class Warehouse3 {
    productId: number = 0;
    productName: string = '';
    productPrice: number = 0;
    quantity: number = 0;
    upc: string = '';

    constructor(productId: number,
                productName: string,
                productPrice: number,
                quantity: number,
                upc: string) {
        this.productId = productId;
        this.productName = productName;
        this.productPrice = productPrice;
        this.quantity = quantity;
        this.upc = upc;
        }
}
