import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, map } from 'rxjs';
import { Product, ProductSearch } from './models/product-search.model';

@Injectable({
  providedIn: 'root'
})
export class ProductSearchService {

  constructor(private http: HttpClient) { }

  searchByTerm(term: string): Observable<Array<Product>> {
    return this.http.get<ProductSearch>(`https://swapi.dev/api/people/?search=${term}`)
    .pipe(
      // Usando operadores RxJS
      map(res => res.results)
    );
  }
}
