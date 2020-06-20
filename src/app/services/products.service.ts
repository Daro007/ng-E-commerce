import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}
  getProducts() {
    return this.http.get(
      'https://my-json-server.typicode.com/Daro007/jsonParaTP/products'
    );
  }
  getById(id: string) {
    return this.http.get(
      'https://my-json-server.typicode.com/Daro007/jsonParaTP/products/' + id
    );
  }
}
