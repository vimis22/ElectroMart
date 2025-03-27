import {Product} from "./Product";
import { ProductType } from "./ProductType";

export class Laptop extends Product {
  public productType: ProductType = ProductType.Laptop;

  constructor(title: string, imageUrl: string, basePrice: number) {
    super(title, imageUrl, basePrice);
  }
}
