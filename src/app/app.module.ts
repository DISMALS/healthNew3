import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { HttpClient, HTTP_INTERCEPTORS, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// 功能插件
import { NgZorroAntdModule, NzMessageService, NZ_MESSAGE_CONFIG, NzNotificationService } from 'ng-zorro-antd'; // UI组件
import { SortableModule } from '@progress/kendo-angular-sortable';
// import { NotifyModule, NotifyService } from 'notify-angular'; // 消息提示
// import { LoadingBarModule, LoadingBarService } from '@ngx-loading-bar/core';

// 国际化
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// 服务
import { SharedService } from './common/shared.service';
import { InterceptorService } from './common/http-interceptor.service';

// 组件
import { AppComponent } from './app.component';

// 全局指令模块
import { DirectiveModule } from './common/directive/directive.module';

// 路由
import { AppRoutingModule } from './app-routing.module';

// 国际化
export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [Http]
      }
    }),
    NgZorroAntdModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    DirectiveModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
    {
      provide: NZ_MESSAGE_CONFIG,
      useValue: {
        nzDuration: 3000,
        nzMaxStack: 5
      }
    },
    SharedService,
    NzMessageService,
    NzNotificationService
  ],
  exports: [SortableModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
