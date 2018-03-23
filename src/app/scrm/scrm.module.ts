import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// 全局公共模块
import { SharedModule } from '../common/shared.module';

// 组件
import { ScrmComponent } from './scrm.component';
import { ScrmListComponent } from './scrm-list/scrm-list.component';

// 路由
import { ScrmRoutingModule } from './scrm-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ScrmRoutingModule
  ],
  declarations: [ScrmComponent, ScrmListComponent]
})
export class ScrmModule { }
