import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import {products} from '../../../products/products.enum';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  @Input() placeholder = 'Поиск';
  @Input() route: string;
  results: any[] = [];
  search: FormControl = new FormControl();

  constructor() { }

  ngOnInit() {
    this.search.valueChanges
      .debounceTime(300)
      .do(() => this.results = products) // server request
      .subscribe(value => {
        this.results = this.results
          .filter(el => el.name.toLowerCase().indexOf(value) !== -1);
      });
  }

}
