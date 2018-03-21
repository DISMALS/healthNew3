import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LoginMainComponent } from './login-main/login-main.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
    }, {
        path: 'login',
        component: LoginComponent,
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

