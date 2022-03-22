import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError as observableThrowError } from "rxjs";
import { catchError } from "rxjs";

//creating an injectable service
@Injectable()
export class HttpErrorsInterceptor implements HttpInterceptor{
  constructor() {

  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
    ):

    //handles and catches the error
    Observable<HttpEvent<any>> {
      return next.handle(req).pipe(
        catchError((err) => {
          console.log(err);
          return observableThrowError(err)
        })
      );
  }
}
