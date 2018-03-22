import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// 组件
import { PatientsComponent } from './patients.component';
import { PatientsListComponent } from './patients-list/patients-list.component';

// 路由
import { PatientsRoutingModule } from './patients-routing.module';


@NgModule({
  imports: [
    CommonModule,
    PatientsRoutingModule
  ],
  declarations: [PatientsComponent, PatientsListComponent]
})
export class PatientsModule { }
