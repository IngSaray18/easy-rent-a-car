import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Product } from "../interfaces/product.modules";


@Injectable({
  providedIn: 'root'
})
export class FetchService {
API= 'https://api.escuelajs.co/api/v1/products?offset=10&limit=52'

  constructor(private http: HttpClient) { }

  getConfig() {
    return this.http.get<Product[]>(this.API );
  }
}
