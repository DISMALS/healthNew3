import { Component, OnInit } from '@angular/core';

// 公共服务
import { SharedService } from '../common/shared.service';

@Component({
    selector: 'app-main-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public maskListMock: Array<MaskList> = [];
    public socketIsConnect: Boolean;
    constructor(public translate: SharedService) {}

    ngOnInit() {
        this.maskListMock = [
            new MaskList(1, '患者预约', 'today-app', 120),
            new MaskList(2, '就诊病历', 'today-app', 3),
            new MaskList(3, '就诊账单', 'today-app', 30)
        ];
        this.socketIsConnect = true;
    }
    chooiseCom (index) {
        console.log(index);
    }
}
export class MaskList {
    constructor(
        public id: number,
        public name: string,
        public iconClass: string,
        public num: number
    ) {}
}