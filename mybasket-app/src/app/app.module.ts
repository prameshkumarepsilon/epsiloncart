import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
  HttpClient
} from "@angular/common/http";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "@components/header/header.component";
import { FooterComponent } from "@components/footer/footer.component";
import { SidebarComponent } from "@components/sidebar/sidebar.component";
import { ProdectDetailsComponent } from "@components/prodect-details/prodect-details.component";
import { ProductListComponent } from "@components/product-list/product-list.component";
import { ProductCardComponent } from "@components/product-card/product-card.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { RouterModule } from "@angular/router";
import { routeConfig } from "./rout-config";
import { FormsModule } from "@angular/forms";
import { AddToCartButtonComponent } from "./components/add-to-cart-button/add-to-cart-button.component";
import { ViewCartComponent } from "./components/view-cart/view-cart.component";
import { ProductsService } from "@services/products.service";
import { CustomHttpInterceptorService } from "@services/custom-http-interceptor.service";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { SharedModule } from "./shared/shared.module";
import { HomeComponent } from './components/home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ProdectDetailsComponent,
    ProductListComponent,
    ProductCardComponent,
    PageNotFoundComponent,
    AddToCartButtonComponent,
    ViewCartComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    RouterModule.forRoot(routeConfig),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        deps: [HttpClient],
        useFactory: http => new TranslateHttpLoader(http)
      }
    }),
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    })
  ],
  providers: [
    ProductsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
