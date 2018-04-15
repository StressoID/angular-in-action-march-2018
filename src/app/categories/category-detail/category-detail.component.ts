import {Component, OnDestroy, OnInit} from '@angular/core';
import {Category} from '../category.interface';
import {ActivatedRoute} from '@angular/router';
import {CategoriesService} from '../categories.service';
import 'rxjs/add/operator/pluck';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit, OnDestroy {

  public categories: Category[] = [];
  public category: Category;
  private subs: Subscription[] = [];

  constructor(private activatedRoute: ActivatedRoute, private categoriesService: CategoriesService) {
  }

  ngOnInit() {
    this.subs.push(
      this.categoriesService.categories$
        .do((category: Category) => this.categories.push(category))
        .subscribe(),
      this.activatedRoute.params
        .pluck('categoryId')
        .subscribe(categoryId => {
          this.category = this.categories.filter(el => el.id === Number(categoryId))[0];
        })
    );
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }
}
