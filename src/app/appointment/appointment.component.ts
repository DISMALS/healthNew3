import { Component, OnInit } from '@angular/core';

// 公共服务
import { SharedService } from '../common/shared.service';

@Component({
    selector: 'app-main-appointment',
    templateUrl: './appointment.component.html',
    styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
    constructor(public translate: SharedService) {}

    ngOnInit() {}
}
