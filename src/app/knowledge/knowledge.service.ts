import { Injectable } from '@angular/core';
import { HttpCommonService } from '../common/http-common.service';

@Injectable()
export class KnowledgeService {
    constructor(public http: HttpCommonService) {}
    getUserInfo(body) {
        return this.http.post('users/authorize', body);
    }
}
