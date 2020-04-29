import { Component, OnInit } from "@angular/core";
import { AuthService } from "@services/auth.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "mb-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  cust: any = {};
  showPassword: boolean = false;
  constructor(
    private auth: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {}
  get passwordTfType(): string {
    return this.showPassword ? "text" : "password";
  }
  login() {
    const { email, password } = this.cust;
    this.auth.login(email, password).subscribe(
      () => {
        let qp = this.activatedRoute.snapshot.queryParams;
        let redirect = qp.redirect || "/";
        this.router.navigate([redirect]);
      },
      (err) => {
        console.dir(err);
        alert("Invalid email/password");
      }
    );
  }
}
