import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ordersUrl } from "src/urls";
import { Order } from "src/app/model/order";
import { AuthService } from "@services/auth.service";
import "rxjs/add/operator/map";
@Injectable({
  providedIn: "root"
})
export class OrderService {
  constructor(private http: HttpClient, private auth: AuthService) {}
  get orders(): Observable<Order[]> {
    return this.http.get(ordersUrl).map(resp => resp as Order[]);
  }
  placeOrder(ord: Order): Observable<any> {
    ord.customerId = this.auth.userId;
    return this.http.post(ordersUrl, ord);
  }
  getOrder(orderId): Observable<Order> {
    return this.http.get(ordersUrl + orderId).map(resp => resp as Order);
  }
}
