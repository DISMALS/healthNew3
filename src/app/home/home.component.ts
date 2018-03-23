import { Component, OnInit } from '@angular/core';

// 公共服务
import { SharedService } from '../common/shared.service';

@Component({
    selector: 'app-main-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    constructor(public translate: SharedService) {}

    ngOnInit() {}
}
