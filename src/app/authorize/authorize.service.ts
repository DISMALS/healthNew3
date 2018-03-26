import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { HttpCommonService } from '../common/http-common.service';

@Injectable()
export class AuthorizeService {
    constructor(public http: HttpCommonService) {}
    getUserInfo(body) {
        return this.http.post('users/authorize', body);
    }
}
