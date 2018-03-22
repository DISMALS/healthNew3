import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// 组件
import { ScrmComponent } from './scrm.component';
import { ScrmListComponent } from './scrm-list/scrm-list.component';

const routes: Routes = [
    {
        path: '',
        component: ScrmComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'scrm-list'
            }, {
                path: 'scrm-list',
                component: ScrmListComponent
            }
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class ScrmRoutingModule {}
