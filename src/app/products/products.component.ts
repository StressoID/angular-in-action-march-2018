import { Component, OnInit } from '@angular/core';
import {Product} from './product.interface';
import {products} from './products.enum';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products: Product[] = products;

  constructor() { }

  ngOnInit() {
  }

}
