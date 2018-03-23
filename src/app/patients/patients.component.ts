import { Component, OnInit } from '@angular/core';

// 公共服务
import { SharedService } from '../common/shared.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

  constructor(public translate: SharedService) { }

  ngOnInit() {
  }

}
