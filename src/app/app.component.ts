import { Component, OnDestroy } from '@angular/core';
import {MatDialog} from '@angular/material';
import {ModalContentComponent} from './shared/components/modal-content/modal-content.component';
import {products} from './products/products.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  public someColor: string;
  private COLORS = ['primary', 'accent', 'warn'];
  public count = 1;
  public products = products;

  ngOnDestroy(): void { }

  constructor(public dialog: MatDialog) { }

  changeColor(event) {
    if (event) {
      this.someColor = this.randomColor();
      this.count++;
    }
  }

  private randomColor() {
    const i = Math.floor(Math.random() * (this.COLORS.length - 0) + 0);
    console.log(i);
    return this.COLORS[i];
  }

  openModal() {
    this.dialog.open(ModalContentComponent);
  }
}
