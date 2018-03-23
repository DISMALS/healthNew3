import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// 全局公共模块
import { SharedModule } from '../common/shared.module';

// 子组件
import { HomeComponent } from './home.component';
import { PatientAppointmentComponent } from './patient-appointment/patient-appointment.component';

// 路由
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    PatientAppointmentComponent
  ]
})
export class HomeModule { }
