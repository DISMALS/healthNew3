import { Component, OnInit } from '@angular/core';

// 公共服务
import { SharedService } from '../common/shared.service';

@Component({
  selector: 'app-scrm',
  templateUrl: './scrm.component.html',
  styleUrls: ['./scrm.component.scss']
})
export class ScrmComponent implements OnInit {

  constructor(public translate: SharedService) { }

  ngOnInit() {
  }

}
