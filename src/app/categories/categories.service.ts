import {Injectable} from '@angular/core';
import {Category} from './category.interface';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class CategoriesService {

  private _categories: Category[] = [
    {name: 'Phones', id: 1, description: 'Super duper phones'},
    {name: 'TVs', id: 2, description: 'Super duper TVs'},
    {name: 'Computers', id: 3, description: 'Super duper computers'},
  ];

  public categories$: Subject<Category> = new Subject();

  constructor() {}

  get() {
    this._categories.forEach(el => this.categories$.next(el));
    this.add({
      name: 'Games',
      id: 4,
      description: 'PS, Xbox, PC'
    });
  }

  add(category: Category) {
    this.categories$.next(category);
  }

}
