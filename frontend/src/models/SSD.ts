import {Product} from "./Product";
import {ProductType} from "./ProductType";

export class SSD extends Product {
  public productType: ProductType = ProductType.SSD;

  constructor(title: string, imageUrl: string, basePrice: number){
    super(title, imageUrl, basePrice);
  }
}
