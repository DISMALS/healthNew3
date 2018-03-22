import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// 组件
import { ConfigurationComponent } from './configuration.component';
import { ConfigurationListComponent } from './configuration-list/configuration-list.component';

const routes: Routes = [
    {
        path: '',
        component: ConfigurationComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'configuration-list'
            }, {
                path: 'configuration-list',
                component: ConfigurationListComponent
            }
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class ConfigurationRoutingModule {}
