import { Component, OnInit } from '@angular/core';

// 公共服务
import { SharedService } from '../common/shared.service';

@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.component.html',
  styleUrls: ['./clinic.component.scss']
})
export class ClinicComponent implements OnInit {

  constructor(public translate: SharedService) { }

  ngOnInit() {
  }

}
