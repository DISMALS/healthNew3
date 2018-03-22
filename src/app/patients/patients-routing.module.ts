import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//  组件
import { PatientsComponent } from './patients.component';
import { PatientsListComponent } from './patients-list/patients-list.component';

const routes: Routes = [
    {
        path: '',
        component: PatientsComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'patients-list'
            }, {
                path: 'patients-list',
                component: PatientsListComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PatientsRoutingModule { }
