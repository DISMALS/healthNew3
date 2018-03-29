import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SortableModule } from '@progress/kendo-angular-sortable';

@Component({
  selector: 'app-menu-config',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './menu-config.component.html',
  styleUrls: ['./menu-config.component.scss']
})
export class MenuConfigComponent implements OnInit {
  public chooised: Array<MenuList> = [];
  public noChooised: Array<MenuList> = [];
  public classObj;
  public palettes: any[];
  public disabledIndexes: number[] = [];

  constructor() {}

  ngOnInit() {
    const menulist = [
      {id: 1, name: '患者', ischooise: false},
      {id: 2, name: 'SCRM', ischooise: true},
      {id: 3, name: '诊所', ischooise: false},
      {id: 4, name: '报表', ischooise: true},
      {id: 5, name: '系统配置', ischooise: true},
      {id: 6, name: '预约', ischooise: false},
      {id: 7, name: '运营', ischooise: true},
      {id: 8, name: '知识库', ischooise: false},
      {id: 9, name: 'REM', ischooise: false},
      {id: 10, name: '首页', ischooise: true},
      {id: 11, name: '测试', ischooise: false},
      {id: 12, name: '个人信息', ischooise: false}
    ];
    menulist.forEach(item => {
      if (item.ischooise) {
        this.chooised.push(item);
      }else {
        this.noChooised.push(item);
      }
    });
    this.palettes = [
      { data: this.chooised, name: '已选择', isLeft: true },
      { data: this.noChooised, name: '未选择', isLeft: false }
    ];
    // this.classObj = {
    //   'dragable': (this.chooised.length < 5) ? true : false,
    //   'undragable': (this.chooised.length >= 5) ? true : false
    // };
  }
  // 某列添加数据
  onDataAdd(i, e) {
    console.log('add:', i, e);
  }
  // 某列移除数据
  onDataRemove(i, e) {
    console.log('remove:', i, e);
  }
  // 列内拖拽结束
  onDragEnd(i, e) {
    console.log('end:', i, e);
  }
  // 禁用拖拽
  // disableItem() {
  //   this.disabledIndexes = [];
  //   if (this.chooised.length >= 5) {
  //     this.noChooised.forEach((item, index) => {
  //       this.disabledIndexes.push(index);
  //     });
  //   }
  //   console.log(this.disabledIndexes);
  // }
}
export class MenuList {
    public id: number;
    public name: string;
    public ischooise: boolean;
}
