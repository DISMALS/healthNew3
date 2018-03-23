import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class AuthorizeService {
    public header: Headers = new Headers({'Content-Type': 'application/json'});
    public serverUrl: string = environment.serverUrl;
    constructor(public http: Http) {}
    getUserInfo(url, body, opts) {
        // debugger;
        this.http.post(`${this.serverUrl}/${url}`, body, opts).subscribe((data) => {
            console.log(data);
        });
    }
}
