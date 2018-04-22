import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {CanLoad, Route} from '@angular/router';

@Injectable()
export class AuthGuard implements CanLoad {
  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    return !!localStorage.getItem('name');
  }
}
