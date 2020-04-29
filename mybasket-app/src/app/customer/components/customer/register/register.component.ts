import { Component, OnInit } from "@angular/core";
import { Customer } from "src/app/model/customer";
import { AuthService } from "@services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "mb-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  c: Customer = new Customer();
  c_password: string = "";
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (this.auth.isAuthenticated) {
      this.router.navigate(["/"]);
    }
  }
  get passwordsMatch() {
    return this.c.password == this.c_password;
  }

  register() {
    this.auth.registerUser(this.c).subscribe(resp=> {
      this.router.navigate(["/"]);
    });
  }
}
