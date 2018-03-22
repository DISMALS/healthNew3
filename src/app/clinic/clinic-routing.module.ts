import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// 组件
import { ClinicComponent } from './clinic.component';
import { ClinicListComponent } from './clinic-list/clinic-list.component';
const routse: Routes = [
    {
        path: '',
        component: ClinicComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'clinic-list'
            }, {
                path: 'clinic-list',
                component: ClinicListComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routse)],
    exports: [RouterModule]
})
export class ClinicRoutingModule {}
