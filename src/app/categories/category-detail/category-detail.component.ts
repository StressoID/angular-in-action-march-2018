import { Component, OnInit } from '@angular/core';
import {Category} from '../category.interface';
import {ActivatedRoute} from '@angular/router';
import {CategoriesService} from '../categories.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit {

  public categories: Category[];
  public category: Category;

  constructor(private activatedRoute: ActivatedRoute, private categoriesService: CategoriesService) {
    this.categories = this.categoriesService.categories;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.category = this.categories.filter(el => el.id === Number(params.categoryId))[0];
    });
  }

}
