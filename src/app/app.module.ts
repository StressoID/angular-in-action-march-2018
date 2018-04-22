import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {CategoriesModule} from './categories/categories.module';
import {LoginModule} from './login/login.module';
import {AuthGuard} from './core/auth.guard';
import {HttpClientModule} from '@angular/common/http';
import {HttpService} from './http.service';
import { MyObservableComponent } from './my-observable/my-observable.component';
import { MyFormComponent } from './my-form/my-form.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MyObservableComponent,
    MyFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CoreModule,
    LoginModule,
    CategoriesModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [AuthGuard, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
