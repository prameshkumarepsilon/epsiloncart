import { ProductsService } from "./../../services/products.service";
import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/model/product";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/map";
import { ActivatedRoute } from "@angular/router";
// for the above to work, you have  to install rxjs-compat
const url = "http://vinbasket.herokuapp.com/products";
@Component({
  selector: "mb-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  products: Array<Product>;
  pageNum: number = 1;
  constructor(
    private ps: ProductsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(({ brand, category, q }) => {
      this.ps
        .getAllProducts(this.pageNum++, brand, category, q)
        .subscribe(data => {
          (this.products = data), (this.pageNum = 1);
        });
    });
    // this.loadMore();
  }
  loadMore() {
    this.activatedRoute.queryParams.subscribe(({ brand, category, q }) => {
      this.ps
        .getAllProducts(this.pageNum++, brand, category, q)
        .subscribe(data => this.products.push(...data));
    });
  }
}
