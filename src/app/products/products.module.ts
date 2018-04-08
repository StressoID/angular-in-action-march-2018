import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductsRoutingModule} from './products-routing.module';
import {ProductsComponent} from './products.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {IphoneDetectorDirective} from './iphone-detector.directive';
import {IphoneDetectorStructureDirective} from './iphone-detector-structure.directive';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  declarations: [
    ProductsComponent,
    ProductDetailComponent,
    IphoneDetectorDirective,
    IphoneDetectorStructureDirective,
  ]
})
export class ProductsModule {
}
