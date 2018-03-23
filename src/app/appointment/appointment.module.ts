import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// 全局公共模块
import { SharedModule } from '../common/shared.module';

// 组件
import { AppointmentComponent } from './appointment.component';

// 路由
import { AppointmentRoutingModule } from './appointment-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AppointmentRoutingModule
  ],
  declarations: [
    AppointmentComponent
  ]
})
export class AppointmentModule { }
