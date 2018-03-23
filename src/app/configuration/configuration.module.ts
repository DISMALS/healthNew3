import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// 全局公共模块
import { SharedModule } from '../common/shared.module';

// 组件
import { ConfigurationComponent } from './configuration.component';
import { ConfigurationListComponent } from './configuration-list/configuration-list.component';

// 路由
import { ConfigurationRoutingModule } from './configuration-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ConfigurationRoutingModule
  ],
  declarations: [ConfigurationComponent, ConfigurationListComponent]
})
export class ConfigurationModule { }
