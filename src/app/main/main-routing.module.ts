import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// 组件
import { MainComponent } from './main.component';


const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'home'
            }, {
                path: 'home',
                loadChildren: '../home/home.module#HomeModule'
            }, {
                path: 'appointment',
                loadChildren: '../appointment/appointment.module#AppointmentModule'
            }, {
                path: 'patients',
                loadChildren: '../patients/patients.module#PatientsModule'
            }, {
                path: 'report',
                loadChildren: '../report/report.module#ReportModule'
            }, {
                path: 'clinic',
                loadChildren: '../clinic/clinic.module#ClinicModule'
            }, {
                path: 'billing',
                loadChildren: '../billing/billing.module#BillingModule'
            }, {
                path: 'operation',
                loadChildren: '../operation/operation.module#OperationModule'
            }, {
                path: 'scrm',
                loadChildren: '../scrm/scrm.module#ScrmModule'
            }, {
                path: 'knowledge',
                loadChildren: '../knowledge/knowledge.module#KnowledgeModule'
            }, {
                path: 'configuration',
                loadChildren: '../configuration/configuration.module#ConfigurationModule'
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class MainRoutingModule { }
