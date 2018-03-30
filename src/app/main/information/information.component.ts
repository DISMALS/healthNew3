import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  public isActive: Boolean = false;
  constructor() { }

  ngOnInit() {
  }

  // 下拉菜单显示状态
  isShow(e) {
    this.isActive = e;
    if (e) {
      setTimeout( () => {
      }, 200);
    }
  }
}
