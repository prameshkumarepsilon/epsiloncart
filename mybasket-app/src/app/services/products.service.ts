import { Injectable } from "@angular/core";
import { productUrl, brandsUrl, categoriesUrl } from "src/urls";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "../model/product";
@Injectable({
  providedIn: "root"
})
export class ProductsService {
  constructor(private http: HttpClient) {}
  // this no longer can be tretad as function,
  // but must be used a variable (readonly)
  get brands(): Observable<string[]> {
    return this.http.get(brandsUrl).map(resp => resp as string[]);
  }
  get categories(): Observable<string[]> {
    return this.http.get(categoriesUrl).map(resp => resp as string[]);
  }
  getProductById(id: number): Observable<Product> {
    return this.http.get(productUrl + id).map(resp => resp as Product);
  }

  getAllProducts(
    pageNum = 1,
    brand = undefined,
    category = undefined,
    q = undefined
  ): Observable<Product[]> {
    const options = {
      params: {
        _page: pageNum.toString()
      }
    };
    if (brand) {
      options.params["brand"] = brand;
    }
    if (category) {
      options.params["category"] = category;
    }
    if (q) {
      options.params["q"] = q;
    }
    return this.http
      .get(productUrl, options)
      .map(resp => resp as Array<Product>);
  }
}
