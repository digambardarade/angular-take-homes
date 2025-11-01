import { Component, OnInit } from '@angular/core';

interface Product {
  pid: number;
  pname: string;
  price: number;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [
    { pid: 1, pname: 'Laptop', price: 999.99 },
    { pid: 2, pname: 'Smartphone', price: 699.99 },
    { pid: 3, pname: 'Tablet', price: 399.99 },
    { pid: 4, pname: 'Headphones', price: 199.99 },
    { pid: 5, pname: 'Gaming Mouse', price: 79.99 },
    { pid: 6, pname: 'Mechanical Keyboard', price: 149.99 },
    { pid: 7, pname: 'Monitor', price: 299.99 },
    { pid: 8, pname: 'Webcam', price: 89.99 },
    { pid: 9, pname: 'External Hard Drive', price: 129.99 },
    { pid: 10, pname: 'Wireless Charger', price: 49.99 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
