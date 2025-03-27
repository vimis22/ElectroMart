import config from "../config/config.json";
export abstract class Product {
    public title: string;
    public imageUrl: string;
    public basePrice: number;
    public taxRate: number = config.taxRate
    public discountRate: number = config.discountRate;

    constructor(title: string, imageUrl: string, basePrice: number) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.basePrice = basePrice;
    }

    public getPrice(): number {
        return Math.round((this.basePrice * (1-this.discountRate)) * this.taxRate);
    }

    public getPriceWithoutTaxes(): number {
        return Math.round(this.basePrice * (1-this.discountRate));
    }
}
