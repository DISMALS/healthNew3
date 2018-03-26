import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class HttpCommonService {
    public httpParams: HttpParams = new HttpParams();
    constructor(public http: HttpClient) {}

    // GET请求
    get(url, ops?) {
        // for (const k of Object.keys(ops)) {
        //     console.log(k);
        // }
        return this.http.get(url);
    }

    // POST请求
    post(url, body, ops?) {
        return this.http.post(url, body);
    }

    // PUT请求
    put(url, body, ops?) {
        return this.http.put(url, body, ops);
    }

    // DELETE请求
    delete(url, ops?) {
        return this.http.delete(url, ops);
    }
}
