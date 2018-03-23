import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// 全局公共模块
import { SharedModule } from '../common/shared.module';

// 路由
import { MainRoutingModule } from './main-routing.module';

// 组件
import { MainComponent } from './main.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MainRoutingModule
  ],
  declarations: [
    MainComponent
  ]
})
export class MainModule { }
