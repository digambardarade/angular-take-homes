import { Component, OnInit } from '@angular/core';
import { Product, PRODUCTS_DATA } from './products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = PRODUCTS_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
