import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  added: boolean;
  loader: boolean;
  id: string;
  product = {} as any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    this.productsService.getById(this.id).subscribe((data) => {
      console.log(data);
      this.product = data;
      this.loader = false;
    });
  }

  addItem() {
    sessionStorage.setItem(`product ${this.id}`, this.id);
    this.showitem();
  }
  showitem() {
    if (sessionStorage.getItem(`product ${this.id}`) === this.id) {
      this.added = true;
    }
  }
  removeItem() {
    sessionStorage.removeItem(`product ${this.id}`);
    this.added = false;
    this.showitem();
  }

  ngOnInit(): void {
    this.loader = true;
    this.showitem();
  }
}
