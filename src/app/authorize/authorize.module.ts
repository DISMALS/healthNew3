import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

// 全局公共模块
import { SharedModule } from '../common/shared.module';

// 组件
import { AuthorizeRoutingModule } from './authorize-routing.module';
import { AuthorizeComponent } from './authorize.component';
import { LoginMainComponent } from './login-main/login-main.component';

// 服务
import { AuthorizeService } from './authorize.service';
import { HttpClient, HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InterceptorService } from '../common/http-interceptor.service';
import { HttpCommonService } from '../common/http-common.service';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    // HttpClientModule,
    HttpModule,
    AuthorizeRoutingModule
  ],
  declarations: [AuthorizeComponent, LoginMainComponent],
  providers: [
    AuthorizeService,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: InterceptorService,
    //   multi: true
    // }
  ],
})
export class AuthorizeModule { }
