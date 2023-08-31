import { Component, OnInit } from '@angular/core';
import { ProductSearchService } from '../product-search.service';
import { FormControl } from '@angular/forms';
import { Observable, filter, debounceTime, switchMap } from 'rxjs';
import { Product } from '../models/product-search.model';

@Component({
  selector: 'lib-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {

  control = new FormControl('', { nonNullable: true })
  products$!: Observable<Array<Product>>

  constructor(
    private productSearchService: ProductSearchService
    ) {}

  ngOnInit(): void {
      this.products$ = this.control.valueChanges.pipe(
        // Ex: Ignora as mudanças no intervalo de 300ms, evitando consultas desnecessárias.
        debounceTime(300),
        filter(text => text.length > 1),
        // switchMap: Recebe um Observable, transformando em outro Observable
        switchMap(text => this.productSearchService.searchByTerm(text))
      )
  }
}
