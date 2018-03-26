import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyFirstRoutingModule } from './my-first-routing.module';
import { MyFirstComponent } from './my-first/my-first.component';
import {CoreModule} from '../core/core.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    MyFirstRoutingModule
  ],
  declarations: [
    MyFirstComponent
  ],
  exports: [
    MyFirstComponent
  ]
})
export class MyFirstModule { }
