import {Product} from "./Product";
import {ProductType} from "./ProductType";

export class PlayStation extends Product {
  public productType: ProductType = ProductType.PlayStation;

  constructor(title: string, imageUrl: string, basePrice: number){
    super(title, imageUrl, basePrice);
  }
}
