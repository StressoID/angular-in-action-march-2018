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


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
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
