import { Component, OnInit } from '@angular/core';
import {Category} from '../category.interface';
import {categories} from '../categories.enum';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit {

  public categories: Category[] = categories;
  public category: Category;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.category = this.categories.filter(el => el.id === Number(params.categoryId))[0];
    });
  }

}
