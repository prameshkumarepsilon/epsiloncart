import { Component, OnInit } from "@angular/core";
import { AuthService } from "@services/auth.service";
import { Router, ActivatedRoute } from "@angular/router";
import { OrderService } from "src/app/customer/services/order.service";
import { Order } from "src/app/model/order";

@Component({
  selector: "mb-view-order",
  templateUrl: "./view-order.component.html",
  styleUrls: ["./view-order.component.css"]
})
export class ViewOrderComponent implements OnInit {
  ord: Order;
  err: any;
  constructor(
    private auth: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ order_id }) => {
      if (!this.auth.isAuthenticated) {
        this.router.navigate(["/customer/login"], {
          queryParams: { redirect: "/customer/order-details/" + order_id }
        });
      } else {
        this.orderService.getOrder(order_id).subscribe(
          data => (this.ord = data),
          err => (this.err = err)
        );
      }
    });
  }
  printOrder() {
    print();
  }
}
