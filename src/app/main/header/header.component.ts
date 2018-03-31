import { Component, OnInit } from '@angular/core';
// import '../../../assets/images/logo.png';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public menus: Array<any>;
  public menuAllList: Array<any>;
  public changelang: Boolean = true;
  public logoPic = '../../../assets/images/logo.png';

  constructor() { }

  ngOnInit() {
    this.menuAllList = [
      {
        levelOne: '首页',
        permissions: 'FUN_CRM_CUSTOM_EXPORT',
        route: ['home'],
        levelTwo: [
          {
            item: '患者预约',
            permissions: 'FUN_CRM_CUSTOM_EXPORT',
            subMenu: []
          }, {
            item: '就诊病历',
            permissions: 'FUN_CRM_CUSTOM_EXPORT',
            subMenu: []
          }
        ]
      }, {
        levelOne: '预约',
        permissions: 'FUN_NURSE_PATIENT_LIST',
        route: ['appointment'],
        levelTwo: []
      }, {
        levelOne: '患者',
        permissions: 'FUN_CONSULT_SCHEDULE',
        route: ['patients'],
        levelTwo: [
          {
            item: '患者预约',
            permissions: 'FUN_CRM_CUSTOM_EXPORT',
            subMenu: []
          }, {
            item: '就诊病历',
            permissions: 'FUN_CRM_CUSTOM_EXPORT',
            subMenu: [
              {
                permissions: 'FUN_CRM_CUSTOM_EXPORT',
                subItem: '三级菜单1'
              }, {
                permissions: 'FUN_CRM_CUSTOM_EXPORT',
                subItem: '三级菜单2'
              }
            ]
          }
        ]
      }, {
        levelOne: '报表',
        permissions: 'FUN_INVOICE_PAID',
        route: ['report'],
        levelTwo: [
          {
            item: '患者预约',
            permissions: 'FUN_CRM_CUSTOM_EXPORT',
            subMenu: []
          }, {
            item: '就诊病历',
            permissions: 'FUN_CRM_CUSTOM_EXPORT',
            subMenu: [
              {
                permissions: 'FUN_CRM_CUSTOM_EXPORT',
                subItem: '三级菜单1'
              }
            ]
          }
        ]
      }, {
        levelOne: '诊所',
        permissions: 'FUN_PHARMACY_DIC_WD',
        route: ['clinic'],
        levelTwo: [
          {
            item: '患者预约',
            permissions: 'FUN_CRM_CUSTOM_EXPORT',
            subMenu: []
          }, {
            item: '就诊病历',
            permissions: 'FUN_CRM_CUSTOM_EXPORT',
            subMenu: [
              {
                permissions: 'FUN_CRM_CUSTOM_EXPORT',
                subItem: '三级菜单1'
              }
            ]
          }
        ]
      }, {
        levelOne: '收费',
        permissions: 'FUN_MEMBER_INFO',
        route: ['billing'],
        levelTwo: [
          {
            item: '患者预约',
            permissions: 'FUN_CRM_CUSTOM_EXPORT',
            subMenu: []
          }, {
            item: '就诊病历',
            permissions: 'FUN_CRM_CUSTOM_EXPORT',
            subMenu: [
              {
                permissions: 'FUN_CRM_CUSTOM_EXPORT',
                subItem: '三级菜单1'
              }
            ]
          }
        ]
      }, {
        levelOne: '运营',
        permissions: 'FUN_PROVIDE_RECORD',
        route: ['operation'],
        levelTwo: [
          {
            item: '患者预约',
            permissions: 'FUN_CRM_CUSTOM_EXPORT',
            subMenu: []
          }, {
            item: '就诊病历',
            permissions: 'FUN_CRM_CUSTOM_EXPORT',
            subMenu: [
              {
                permissions: 'FUN_CRM_CUSTOM_EXPORT',
                subItem: '三级菜单1'
              }
            ]
          }
        ]
      }, {
        levelOne: 'SCRM',
        permissions: 'FUN_LABORATORY_ALL',
        route: ['scrm'],
        levelTwo: [
          {
            item: '患者预约',
            permissions: 'FUN_CRM_CUSTOM_EXPORT',
            subMenu: []
          }, {
            item: '就诊病历',
            permissions: 'FUN_CRM_CUSTOM_EXPORT',
            subMenu: []
          }
        ]
      }, {
        levelOne: '知识库',
        permissions: 'FUN_WAREHOUSE_DELIVER_ALL',
        route: ['knowledge'],
        levelTwo: [
          {
            item: '患者预约',
            permissions: 'FUN_CRM_CUSTOM_EXPORT',
            subMenu: []
          }, {
            item: '就诊病历',
            permissions: 'FUN_NURSE_PATIENT_LIST',
            subMenu: []
          }
        ]
      }, {
        levelOne: '系统配置',
        permissions: 'FUN_PHARMACY_STOCK_IN',
        route: ['configuration'],
        levelTwo: [
          {
            item: '患者预约',
            permissions: 'FUN_CRM_CUSTOM_EXPORT',
            subMenu: []
          }, {
            item: '就诊病历',
            permissions: 'FUN_CRM_CUSTOM_EXPORT',
            subMenu: []
          }
        ]
      }
    ];
    this.menus = this.menuAllList.splice(0, 5);
  }

}
