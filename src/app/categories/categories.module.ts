import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import {CategoriesService} from './categories.service';
import { TestCatComponent } from './test-cat/test-cat.component';

@NgModule({
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ],
  declarations: [CategoriesComponent, CategoryDetailComponent, TestCatComponent],
  providers: [ CategoriesService ]
})
export class CategoriesModule { }
