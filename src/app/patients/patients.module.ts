import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// 全局公共模块
import { SharedModule } from '../common/shared.module';

// 组件
import { PatientsComponent } from './patients.component';
import { PatientsListComponent } from './patients-list/patients-list.component';

// 路由
import { PatientsRoutingModule } from './patients-routing.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PatientsRoutingModule
  ],
  declarations: [PatientsComponent, PatientsListComponent]
})
export class PatientsModule { }
