import { Injectable, Inject } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpResponse, HttpHandler } from '@angular/common/http';
import { HttpSentEvent, HttpUserEvent, HttpHeaderResponse, HttpProgressEvent } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';




// 消息提示
// import { NotifyService } from 'notify-angular';
import { NzMessageService, NzNotificationService } from 'ng-zorro-antd';
// loading状态
// import { LoadingBarService } from '@ngx-loading-bar/core';

@Injectable()
export class InterceptorService implements HttpInterceptor {
    public serverUrl: string = environment.serverUrl;
    public urlTime = {};
    public loading;
    constructor(public router: Router, public nofityServ: NzNotificationService, public loadingBar: NzMessageService) {}
    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any>> {
        let _req;
        // 一秒内不允许多次请求数据
        if (req.method !== 'GET' && this.urlTime[req.url] && Date.now() - this.urlTime[req.url] < 3000) {
            this.nofityServ.error('错误提示', '3秒内不能多次请求！');
            return Observable.throw('overrequest');
        } else if (req.method !== 'GET') {
            this.urlTime[req.url] = Date.now();
        }
        // 显示loading
        this.loading = this.loadingBar.loading('数据加载中...', { nzDuration: 0});
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
        return next.handle(_req)
                    .flatMap((event: any) => {
                        // console.log(event);
                        if (event instanceof HttpResponse) { // && event.type === 0
                            // console.log('请求结束');
                            this.loadingBar.remove(); // 隐藏loading
                            // return Observable.create(observer => {
                            //     observer.error(event);
                            // });
                        }
                        return Observable.create(observer => {
                            observer.next(event);
                        });
                    })
                    .catch((errorMsg: any) => {
                        // console.log(errorMsg);
                        this.loadingBar.remove(); // 隐藏loading
                        if (errorMsg.status === 401) { // token过期
                            this.router.navigateByUrl('/login/login-main');
                        }
                        this.nofityServ.error('错误提示', errorMsg.error.message);
                        return Observable.throw(errorMsg);
                    });
    }
}
