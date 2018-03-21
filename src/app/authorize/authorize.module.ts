import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthorizeRoutingModule } from './authorize-routing.module';
import { LoginMainComponent } from './login-main/login-main.component';

@NgModule({
  imports: [
    CommonModule,
    AuthorizeRoutingModule
  ],
  declarations: [LoginComponent, LoginMainComponent]
})
export class AuthorizeModule { }
