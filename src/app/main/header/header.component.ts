import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public menus: Array<any>;
  public menuAllList: Array<any>;
  constructor() { }

  ngOnInit() {
    this.menuAllList = [
      {
        levelOne: '首页',
        levelTwo: [
          {
            item: '患者预约',
            subMenu: []
          }, {
            item: '就诊病历',
            subMenu: []
          }
        ]
      }, {
        levelOne: '预约',
        levelTwo: [
          {
            item: '患者预约',
            subMenu: []
          }, {
            item: '就诊病历',
            subMenu: [
              {
                subItem: '三级菜单'
              }
            ]
          }
        ]
      }, {
        levelOne: '患者',
        levelTwo: [
          {
            item: '患者预约',
            subMenu: []
          }, {
            item: '就诊病历',
            subMenu: [
              {
                subItem: '三级菜单1'
              }, {
                subItem: '三级菜单2'
              }
            ]
          }
        ]
      }, {
        levelOne: '报表',
        levelTwo: [
          {
            item: '患者预约',
            subMenu: []
          }, {
            item: '就诊病历',
            subMenu: [
              {
                subItem: '三级菜单1'
              }
            ]
          }
        ]
      }, {
        levelOne: '诊所',
        levelTwo: [
          {
            item: '患者预约',
            subMenu: []
          }, {
            item: '就诊病历',
            subMenu: [
              {
                subItem: '三级菜单1'
              }
            ]
          }
        ]
      }, {
        levelOne: '收费',
        levelTwo: [
          {
            item: '患者预约',
            subMenu: []
          }, {
            item: '就诊病历',
            subMenu: [
              {
                subItem: '三级菜单1'
              }
            ]
          }
        ]
      }, {
        levelOne: '运营',
        levelTwo: [
          {
            item: '患者预约',
            subMenu: []
          }, {
            item: '就诊病历',
            subMenu: [
              {
                subItem: '三级菜单1'
              }
            ]
          }
        ]
      }, {
        levelOne: 'SCRM',
        levelTwo: [
          {
            item: '患者预约',
            subMenu: []
          }, {
            item: '就诊病历',
            subMenu: []
          }
        ]
      }, {
        levelOne: '知识库',
        levelTwo: [
          {
            item: '患者预约',
            subMenu: []
          }, {
            item: '就诊病历',
            subMenu: []
          }
        ]
      }, {
        levelOne: '系统配置',
        levelTwo: [
          {
            item: '患者预约',
            subMenu: []
          }, {
            item: '就诊病历',
            subMenu: []
          }
        ]
      }
    ];
    this.menus = this.menuAllList.splice(0,5);
  }

}
