import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// 全局公共模块
import { SharedModule } from '../common/shared.module';

// 组件
import { ClinicComponent } from './clinic.component';
import { ClinicListComponent } from './clinic-list/clinic-list.component';

// 路由
import { ClinicRoutingModule } from './clinic-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ClinicRoutingModule
  ],
  declarations: [ClinicComponent, ClinicListComponent]
})
export class ClinicModule { }
