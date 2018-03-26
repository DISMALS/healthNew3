import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// 国际化
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// 公共服务
import { SharedService } from './shared.service';

// 功能插件
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    NgZorroAntdModule.forRoot()
  ],
  providers: [SharedService],
  exports: [TranslateModule, NgZorroAntdModule],
  declarations: []
})
export class SharedModule {}

