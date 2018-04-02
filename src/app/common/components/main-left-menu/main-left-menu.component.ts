import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-left-menu',
  templateUrl: './main-left-menu.component.html',
  styleUrls: ['./main-left-menu.component.scss']
})
export class MainLeftMenuComponent implements OnInit {
  @Input() maskList: Array<any> = []; // 侧栏列表数据
  @Input() socketNum: Boolean = true;  // 是否显示长连接
  @Output() switchComponent: EventEmitter<any> = new EventEmitter(); // 选中一项触发事件
  constructor() { }

  ngOnInit() {
    if (this.maskList.length > 0 ) {
      this.maskList.forEach((item, index) => {
        if (index === 0 ) {
          item.active = true;
        }else {
          item.active = false;
        }
      });
    }
  }
  switchActive(index) {
    this.switchComponent.emit(index);
    this.maskList.forEach((item, i) => {
      if (i === index) {
        item.active = true;
      }else {
        item.active = false;
      }
    });
  }
}
