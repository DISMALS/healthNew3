import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
        loadChildren: './main/main.module#MainModule'
    }, {
        path: '**',
        redirectTo: 'login'
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }


