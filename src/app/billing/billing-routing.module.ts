import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// 组件
import { BillingComponent } from './billing.component';
import { BillingListComponent } from './billing-list/billing-list.component';

const routes = [
    {
        path: '',
        component: BillingComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'billing-list'
            }, {
                path: 'billing-list',
                component: BillingListComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BillingRoutingModule {}
