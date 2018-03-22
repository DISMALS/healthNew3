import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// 组件
import { AppointmentComponent } from './appointment.component';

const routes: Routes = [
    {
        path: 'appointment',
        component: AppointmentComponent
        // children:[
        //     {
        //         path: '',
        //         pathMatch: 'full',
        //         redirectTo:
        //     }
        // ]

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppointmentRoutingModule {}
