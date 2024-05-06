import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  //Using public API
  // private baseUrl = 'https://fakestoreapi.com';

  // getProducts(): Observable<any[]> {
  //   return this.http.get<any[]>(`${this.baseUrl}/products`);
  // }

  //Using dummy json
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>('/assets/phones.json');
  }

}
