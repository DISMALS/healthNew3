import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class KnowledgeService {
    constructor(public http: HttpClient) {}
    getUserInfo(body) {
        return this.http.post('users/authorize', body);
    }
}
