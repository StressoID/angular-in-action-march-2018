import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  public get(route: string) {
    return this.http.get(`/${route}`);
  }

  public post(route: string, data: any) {
    return this.http.post(`/${route}`, data);
  }

  public put(route: string, data: any) {
    return this.http.put(`/${route}`, data);
  }

  public delete(route) {
    return this.http.delete(`/${route}`);
  }

}
