import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// 引入组件、
import { HomeComponent } from './home.component';
import { PatientAppointmentComponent } from './patient-appointment/patient-appointment.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'patient-appointment'
            }, {
                path: 'patient-appointment',
                component: PatientAppointmentComponent
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

export class HomeRoutingModule { }
