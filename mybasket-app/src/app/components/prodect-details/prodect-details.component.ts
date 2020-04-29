import { Component, OnInit } from "@angular/core";
import { Product } from "./../../model/product";
import { ActivatedRoute } from "@angular/router";
import { ProductsService } from "@services/products.service";

@Component({
  selector: "mb-prodect-details",
  templateUrl: "./prodect-details.component.html",
  styleUrls: ["./prodect-details.component.css"]
})
export class ProdectDetailsComponent implements OnInit {
  //Declered; but undefined
  product: Product;
  found: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private ps: ProductsService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.ps.getProductById(id).subscribe(
        p => {
          this.product = p;
          this.found = true;
        },
        () => (this.found = false)
      );
    });
  }
}
