import {Injectable} from '@angular/core';
import {Category} from './category.interface';

@Injectable()
export class CategoriesService {

  public counter = 0;

  get categories(): Category[] {
    return this._categories;
  }

  set categories(value: Category[]) {
    this._categories = value;
  }

  private _categories: Category[] = [
    {name: 'Phones', id: 1, description: 'Super duper phones'},
    {name: 'TVs', id: 2, description: 'Super duper TVs'},
    {name: 'Computers', id: 3, description: 'Super duper computers'},
  ];

  constructor() {
    console.log('categories service');
  }

  count() {
    this.counter += 1;
    console.log(this.counter);
  }

}
