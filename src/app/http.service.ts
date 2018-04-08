import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  public get(route: string) {
    return this.http.get(route);
  }

}
