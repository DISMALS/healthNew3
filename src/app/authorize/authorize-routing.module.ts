import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthorizeComponent } from './authorize.component';
import { LoginMainComponent } from './login-main/login-main.component';

const routes: Routes = [
    {
        path: '',
        component: AuthorizeComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'login-main'
            }, {
                path: 'login-main',
                component: LoginMainComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthorizeRoutingModule {}

