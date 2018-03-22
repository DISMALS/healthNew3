import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// 子组件
import { HomeComponent } from './home.component';
import { PatientAppointmentComponent } from './patient-appointment/patient-appointment.component';

// 路由
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    PatientAppointmentComponent
  ]
})
export class HomeModule { }
