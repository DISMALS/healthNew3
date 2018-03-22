import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// 组件
import { ReportComponent } from './report.component';
import { ReportListComponent } from './report-list/report-list.component';

const routes: Routes = [
    {
        path: '',
        component: ReportComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'report-list'
            }, {
                path: 'report-list',
                component: ReportListComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReportRoutingModule {}
