import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-operation',
  templateUrl: './user-operation.component.html',
  styleUrls: ['./user-operation.component.scss']
})
export class UserOperationComponent implements OnInit {
  public isActive: Boolean = false;
  constructor() { }

  ngOnInit() {
  }

  // 下拉菜单显示状态
  isShow(e) {
    this.isActive = e;
  }
}
