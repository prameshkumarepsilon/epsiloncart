import { Component, OnInit } from "@angular/core";
import { ProductsService } from "@services/products.service";
import { Router } from "@angular/router";
import { CartServiceService } from "@services/cart-service.service";
import { AuthService } from "@services/auth.service";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "mb-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent {
  brands: string[];
  categories: string[];
  constructor(
    public ps: ProductsService,
    private router: Router,
    public cs: CartServiceService,
    public auth: AuthService,
    private ts: TranslateService
  ) {
    ps.brands.subscribe(data => (this.brands = data));
    ps.categories.subscribe(data => (this.categories = data));
  }
  getProducts(key, val) {
    // alert("key=" + key + ", val=" + val);
    // let qp = {};
    // qp[key] = val;
    // this.router.navigate(["/list"], { queryParams: qp });
    /* This is one line product navegation code */
    this.router.navigate(["/list"], {
      queryParams: { [key]: val }
    });
  }
  changeLang(language: string) {
    this.ts.use(language);
  }
}
