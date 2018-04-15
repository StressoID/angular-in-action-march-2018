import {Component, OnInit} from '@angular/core';
import {Category} from './category.interface';
import {CategoriesService} from './categories.service';
import 'rxjs/add/operator/do';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  public categories: Category[] = [];
  public category_descriptions = [
    {id: 5, description: 'Dya uborki'}
  ];

  constructor(private categoriesService: CategoriesService) {
  }

  ngOnInit() {
    this.categoriesService.categories$
      .flatMap((category: Category) => {
        if (!category.description) {
          category.description = this.category_descriptions.filter(el => el.id === category.id)[0].description;
        }
        return Observable.of(category);
      })
      .do((category: Category) => {
        this.categories.push(category);
      })
      .subscribe();

    this.categoriesService.get();

    this.categoriesService.add({
      id: 5,
      name: 'Vacuum cleaner'
    });

  }
}
