import { Injectable } from '@angular/core';
import { HttpHeaders, HttpRequest, HttpResponse, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpCommonService {
    private header: HttpHeaders = new HttpHeaders({'Content-Type':'application/json'});
    public router: Router;

    constructor(public http: HttpClient){}

    // GET请求
    get(url, ops) {
        return this.http.get(url, ops).map(res => res).catch(error => error);
    }

    // POST请求
    post(url, body, ops) {
        return this.http.post(url, body, ops).map(res => res).catch(error => error);
    }

    // PUT请求
    put(url, body, ops) {
        return this.http.put(url, body, ops).map(res => res).catch(error => error);
    }

    // DELETE请求
    delete(url, ops) {
        return this.http.delete(url, ops).map(res => res).catch(error => error);
    }
}