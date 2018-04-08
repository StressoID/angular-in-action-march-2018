import { Component, OnInit } from '@angular/core';
import {CategoriesService} from '../categories.service';

@Component({
  selector: 'app-test-cat',
  templateUrl: './test-cat.component.html',
  styleUrls: ['./test-cat.component.scss'],
  providers: [ CategoriesService ]
})
export class TestCatComponent implements OnInit {

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
  }

  setCount() {
    this.categoriesService.count();
  }

}
