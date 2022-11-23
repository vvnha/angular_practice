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
  public color: string = '';

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
    console.log(this.color);
  }
}
