import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// 路由守卫
import { CanActivateTeam } from './common/guard-router';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
    }, {
        path: 'login',
        loadChildren: './authorize/authorize.module#AuthorizeModule'
    }, {
        path: 'main',
        canActivate: [CanActivateTeam],
        loadChildren: './main/main.module#MainModule'
    }, {
        path: '**',
        redirectTo: 'login'
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
    providers: [CanActivateTeam]
})
export class AppRoutingModule { }


