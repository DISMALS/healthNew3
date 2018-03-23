import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthorizeService {
    public header: Headers = new Headers({'Content-Type': 'application/json'});
    public serverUrl: string = environment.serverUrl;
    constructor(public http: Http, public headers: Headers) {}
    getUserInfo(url, body, opts) {
        this.http.post(`${this.serverUrl}/${url}`, body, opts);
    }
}
