import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models';
import { PRODUCTS_DATA } from '../../../data';

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
