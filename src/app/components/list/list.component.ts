import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  public productList: Product[] = [];
  public newProductName: string = '';

  constructor(private _productService: ProductService) {}

  public ngOnInit(): void {
    try {
      this.getProductList();
    } catch (error) {
      console.error(error);
    }
  }

  public getProductList() {
    this._productService.getProducts('products').subscribe((response) => {
      this.productList = response.data;
      const totalCount = response.totalCount;

      this._productService.setProductList(response.data);
    });
  }

  public onAddProductClick() {
    const newProduct = {
      brand: 'brand 4',
      category: 'category 4',
      code: '957960a0-5a10-40dc-8b03-251e65896c29',
      createdAt: '2022-08-02T18:55:48.366Z',
      description:
        'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
      id: uuidv4(),
      name: this.newProductName,
      price: 69603.8,
      type: 'type 3',
    };

    this.productList.push(newProduct);

    this.newProductName = '';

    this._productService.setProductList(this.productList);
  }

  public onItemClick($product: Product) {
    console.log($product);

    this.productList = this.productList.filter(
      (product) => product.id !== $product.id
    );

    this._productService.setProductList(this.productList);
  }
}
