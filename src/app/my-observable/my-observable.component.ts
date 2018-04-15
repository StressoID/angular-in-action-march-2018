import {Component, OnInit} from '@angular/core';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import {Product} from '../products/product.interface';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-my-observable',
  templateUrl: './my-observable.component.html',
  styleUrls: ['./my-observable.component.scss']
})
export class MyObservableComponent implements OnInit {

  products: Product[] = [
    {name: 'Apple Iphone 5', id: 1, description: 'Super duper iphone 5', createdDate: '10.01.1990'},
    {name: 'Iphone 7', id: 2, description: 'Super duper iphone 7', createdDate: '10.01.1990'},
    {name: 'Samsung A7', id: 3, description: 'Super duper samsung', createdDate: '10.01.1990'},
  ];

  public product$: Observable<Product> = Observable.from(this.products);

  constructor() {

  }

  ngOnInit() {
    this.product$
      .filter((product: Product) => product.name.toLowerCase().indexOf('iphone') !== -1)
      .map((product: Product) => {
        product.name = `${product.name}0`;
        return product;
      })
      .finally(() => console.log('products end'))
      .subscribe((product: Product) => console.log(product));
  }

}
