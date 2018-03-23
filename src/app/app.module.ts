import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { HttpClient } from 'selenium-webdriver/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// 国际化
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// 服务
import { SharedService } from './common/shared.service';
import { HttpInterceptorService } from './common/http-interceptor.service';

// 组件
import { AppComponent } from './app.component';

// 路由
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: Http) => new TranslateHttpLoader( http, '../assets/i18n/', '.json'),
        deps: [Http]
      }
    }),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    SharedService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
