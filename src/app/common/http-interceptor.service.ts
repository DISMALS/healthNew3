import { Injectable, Inject } from '@angular/core';
import { HttpInterceptor, HttpHeaders, HttpRequest, HttpResponse, HttpEvent, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/operator/catch';

@Injectable()
export class InterceptorService implements HttpInterceptor {
    public serverUrl: string = environment.serverUrl;
    public urlTime = {};
    constructor(public router: Router) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let _req;
        // 一秒内不允许多次请求数据
        if (req.method !== 'GET' && this.urlTime[req.url] && Date.now() - this.urlTime[req.url] < 1000) {
            return Observable.throw(new Error('overrequest'));
        } else if (req.method !== 'GET') {
            this.urlTime[req.url] = Date.now();
        }
        // 添加请求地址
        if (req.url.indexOf('//') < 0) {
            _req = req.clone({
                url: `${this.serverUrl}/${req.url}`,
                withCredentials: true
            });
        }

        // 设置header
        if (!_req.headers.get('Content-Type')) {
            _req = _req.clone({
                setHeaders: {
                    'Content-Type': 'application/json'
                }
            });
        }

        // 设置token
        if (_req.url.indexOf('users/authorize') < 0) {
            const userinfo = JSON.parse(window.sessionStorage.getItem('userInfo'));
            if (userinfo) {
                _req = _req.clone({
                    setHeaders: {
                        'X-Auth-Token': userinfo.token
                    }
                });
            }else {
                this.router.navigate(['/login']);
            }
        }
        // 监听请求时的错误
        return next.handle(_req).catch((error: any) => {
            let notice = '';
            if (error.status === 401) {
                notice = '会话超时';
                this.router.navigateByUrl('/login/login-main');
            } else if (error.status !== 400) {
                notice = '网络异常';
            }
            return Observable.throw(error);
        });
    }
}
