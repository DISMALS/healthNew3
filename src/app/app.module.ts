import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// 各个模块
import { AppCommonModule } from './common/common.module';
import { AuthorizeModule } from './authorize/authorize.module';
import { HomeModule } from './home/home.module';
import { AppointmentModule } from './appointment/appointment.module';
import { PatientsModule } from './patients/patients.module';
import { ReportModule } from './report/report.module';
import { ClinicModule } from './clinic/clinic.module';
import { BillingModule } from './billing/billing.module';
import { OperationModule } from './operation/operation.module';
import { ScrmModule } from './scrm/scrm.module';
import { KnowledgeModule } from './knowledge/knowledge.module';
import { ConfigurationModule } from './configuration/configuration.module';



import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
