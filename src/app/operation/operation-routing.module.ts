import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// 组件
import { OperationComponent } from './operation.component';
import { OperationListComponent } from './operation-list/operation-list.component';

const routes: Routes = [
    {
        path: '',
        component: OperationComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'operation-list'
            }, {
                path: 'operation-list',
                component: OperationListComponent
            }
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class OperationRoutingModule {}
