import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Customer } from "../model/customer";
import { Observable } from "rxjs";
import { customerUrl, loginUrl } from "src/urls";
import "rxjs/add/operator/do";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  loggedInUser: string;
  constructor(private http: HttpClient, private router: Router) {
    let user = sessionStorage["user"];
    if (user) {
      user = JSON.parse(user);
      this.loggedInUser = user.name;
    }
  }
  login(email: string, password: string): Observable<any> {
    return this.http
      .post(loginUrl, { email, password })
      .do(console.log)
      .do(resp => (this.loggedInUser = resp["name"]))
      .do(resp => (sessionStorage["user"] = JSON.stringify(resp)));
  }
  logout() {
    this.loggedInUser = undefined;
    sessionStorage.removeItem("user");
    this.router.navigate(["/customer/login"]);
  }
  registerUser(customer: Customer): Observable<any> {
     return this.http.post(customerUrl,customer).do(console.log);
  }

  get isAuthenticated() {
    let user = sessionStorage["user"];
    if (!user) return false;
    user = JSON.parse(user);
    return "token" in user;
  }
  get userId() {
    let user = sessionStorage["user"];
    if (user) {
      user = JSON.parse(user);
      return user["id"];
    }
  }
  get token() {
    let user = sessionStorage["user"];
    if (user) {
      user = JSON.parse(user);
      return user["token"];
    }
  }
}
