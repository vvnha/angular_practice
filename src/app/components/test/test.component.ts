import { Component, Directive, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  public productList: Product[] = [];
  constructor(private _productService: ProductService) {}

  public ngOnInit(): void {
    this._productService.productList$.subscribe(
      (list) => (this.productList = list)
    );
  }
}
