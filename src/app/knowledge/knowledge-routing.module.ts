import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// 组件
import { KnowledgeComponent } from './knowledge.component';
import { KnowledgeListComponent } from './knowledge-list/knowledge-list.component';

const routes: Routes = [
    {
        path: '',
        component: KnowledgeComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'knowledge-list'
            }, {
                path: 'knowledge-list',
                component: KnowledgeListComponent
            }
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class KnowledgeRoutingModule {}
