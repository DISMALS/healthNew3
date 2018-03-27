import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// 全局公共模块
import { SharedModule } from '../common/shared.module';

// 组件
import { AuthorizeRoutingModule } from './authorize-routing.module';
import { AuthorizeComponent } from './authorize.component';
import { LoginMainComponent } from './login-main/login-main.component';

// 服务
import { AuthorizeService } from './authorize.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AuthorizeRoutingModule
  ],
  declarations: [AuthorizeComponent, LoginMainComponent],
  providers: [
    AuthorizeService
  ],
})
export class AuthorizeModule { }
