import {Product} from "./Product";
import {ProductType} from "./ProductType";

export class Phone extends Product {
  public productType: ProductType = ProductType.Phone;

  constructor(title: string, imageUrl: string, basePrice: number){
    super(title, imageUrl, basePrice);
  }
}
