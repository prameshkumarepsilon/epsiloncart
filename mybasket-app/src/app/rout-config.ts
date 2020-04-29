import { Routes } from "@angular/router";
import { ProdectDetailsComponent } from "@components/prodect-details/prodect-details.component";
import { ProductListComponent } from "@components/product-list/product-list.component";
import { PageNotFoundComponent } from "@components/page-not-found/page-not-found.component";
import { ViewCartComponent } from "@components/view-cart/view-cart.component";

export const routeConfig: Routes = [
  {
    path: "",
    redirectTo: "list",
    pathMatch: "full"
  },
  {
    path: "list",
    component: ProductListComponent
  },
  {
    path: "details/:id",
    component: ProdectDetailsComponent
  },
  {
    path: "view-cart",
    component: ViewCartComponent
  },
  {
    path: "customer",
    // works in Angular 8; but not in Angular 9
    // loadChildren: "./customer/customer.module#CustomerModule"
    // In Angular 9, use the dynamic import functio for the same
    loadChildren: () =>
      import("./customer/customer.module").then(m => m.CustomerModule)
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];
