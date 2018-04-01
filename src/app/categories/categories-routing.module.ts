import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CategoriesComponent} from './categories.component';
import {CategoryDetailComponent} from './category-detail/category-detail.component';

const routes: Routes = [
  {
    path: 'categories', component: CategoriesComponent, children: [
      {path: ':categoryId', component: CategoryDetailComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule {
}
