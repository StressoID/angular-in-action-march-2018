import {Component, OnInit} from '@angular/core';
import {Product} from '../product.interface';
import {products} from '../products.enum';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  public products: Product[] = products;

  constructor() {
  }

  ngOnInit() {
  }

}
