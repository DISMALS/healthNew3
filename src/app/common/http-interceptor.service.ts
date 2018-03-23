import { Injectable, Inject } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpInterceptor, HttpHeaders, HttpRequest, HttpResponse, HttpEvent, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()

export class HttpInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req);
    }
}
