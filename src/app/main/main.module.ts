import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpClient, HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

// 全局公共模块
import { SharedModule } from '../common/shared.module';

// 路由
import { MainRoutingModule } from './main-routing.module';

// 组件
import { MainComponent } from './main.component';
import { HeaderComponent } from './header/header.component';
import { MenuConfigComponent } from './menu-config/menu-config.component';
import { PatientSearchComponent } from './patient-search/patient-search.component';
import { UserOperationComponent } from './user-operation/user-operation.component';
import { WeichatComponent } from './weichat/weichat.component';
import { InformationComponent } from './information/information.component';
import { AddPatientComponent } from './add-patient/add-patient.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    SharedModule,
    MainRoutingModule
  ],
  declarations: [
    MainComponent,
    HeaderComponent,
    MenuConfigComponent,
    PatientSearchComponent,
    UserOperationComponent,
    WeichatComponent,
    InformationComponent,
    AddPatientComponent
  ],
  providers: []
})
export class MainModule { }
