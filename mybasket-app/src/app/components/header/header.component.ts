import { Component, OnInit } from "@angular/core";
import { CartServiceService } from "@services/cart-service.service";
import { AuthService } from "@services/auth.service";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "mb-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  qryTxt: string = "";
  constructor(
    public cs: CartServiceService,
    public auth: AuthService,
    private router: Router,
    private ts: TranslateService
  ) {}

  ngOnInit(): void {}
  search() {
    this.router.navigate(["/list"], { queryParams: { q: this.qryTxt } });
  }
  changeLang(language: string) {
    this.ts.use(language);
  }
}
