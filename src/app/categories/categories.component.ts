import {Component, OnInit} from '@angular/core';
import {Category} from './category.interface';
import {CategoriesService} from './categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  public categories: Category[];
  public testCat: boolean;

  constructor(private categoriesService: CategoriesService) {
    this.categories = this.categoriesService.categories;
  }

  ngOnInit() { }

  clickCount() {
    this.categoriesService.count();
  }

}
