import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// 组件
import { ReportComponent } from './report.component';
import { ReportListComponent } from './report-list/report-list.component';

// 路由
import { ReportRoutingModule } from './report-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReportRoutingModule
  ],
  declarations: [ReportComponent, ReportListComponent]
})
export class ReportModule { }
