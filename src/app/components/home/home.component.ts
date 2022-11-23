import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public productList: Product[] = [];

  constructor(private _productService: ProductService) {}

  public ngOnInit(): void {
    try {
      this.getProductList();
      console.log(this.productList);
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

  onButtonClick() {
    const newProduct = {
      brand: 'brand 4',
      category: 'category 4',
      code: '957960a0-5a10-40dc-8b03-251e65896c29',
      createdAt: '2022-08-02T18:55:48.366Z',
      description:
        'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
      id: '4',
      name: 'Refined Frozen Fish',
      price: 69603.8,
      type: 'type 3',
    };

    this.productList.push(newProduct);
  }
}
