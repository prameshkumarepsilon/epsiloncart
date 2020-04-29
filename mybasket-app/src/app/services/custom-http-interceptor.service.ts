import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpHeaders,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from "@angular/common/http";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CustomHttpInterceptorService implements HttpInterceptor {
  constructor(private auth: AuthService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headers = new HttpHeaders({
      Authorization: "Bearer " + this.auth.token
    });
    // req is imutable, create a clone of that by supplying a
    //  new headers object
    const newReq = req.clone({ headers });
    return next.handle(newReq);
  }
}
