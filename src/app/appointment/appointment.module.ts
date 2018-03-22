import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// 组件
import { AppointmentComponent } from './appointment.component';

// 路由
import { AppointmentRoutingModule } from './appointment-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppointmentRoutingModule
  ],
  declarations: [
    AppointmentComponent
  ]
})
export class AppointmentModule { }
