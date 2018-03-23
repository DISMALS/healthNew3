import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// 全局公共模块
import { SharedModule } from '../common/shared.module';

// 组件
import { ReportComponent } from './report.component';
import { ReportListComponent } from './report-list/report-list.component';

// 路由
import { ReportRoutingModule } from './report-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReportRoutingModule
  ],
  declarations: [ReportComponent, ReportListComponent]
})
export class ReportModule { }
