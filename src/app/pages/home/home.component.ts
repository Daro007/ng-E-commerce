import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  loader: boolean;
  products = null;
  constructor(private productsServe: ProductsService) {
    this.productsServe.getProducts().subscribe((data) => {
      console.log(data);
      this.products = data;
      this.loader = false;
      console.log(this.loader);
    });
  }

  ngOnInit(): void {
    this.loader = true;
    console.log(this.loader);
  }
}
