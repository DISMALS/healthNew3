import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './authorize/login/login.component';
import { MianCommonComponent } from './main/main-common/main-common.component';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        loadChildren: './authorize/authorize-routing.module#AuthorizeRoutingModule'
    }, {
        path: 'main',
        component: MianCommonComponent,
        loadChildren: './main/main-routing.module#MainRoutingModule'
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [RouterModule]
})
export class AppRoutingModule { }


