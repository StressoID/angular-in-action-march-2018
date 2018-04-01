import {Component, OnInit} from '@angular/core';
import {Category} from './category.interface';
import {categories} from './categories.enum';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  public categories: Category[] = categories;

  constructor() { }

  ngOnInit() { }

}
