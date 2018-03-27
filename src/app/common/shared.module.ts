import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// 国际化
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// 公共服务
import { SharedService } from './shared.service';

// 功能插件
import { NgZorroAntdModule } from 'ng-zorro-antd';

// 全局指令模块
import { DirectiveModule } from '../common/directive/directive.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    NgZorroAntdModule,
    DirectiveModule
  ],
  providers: [SharedService],
  declarations: [],
  exports: [TranslateModule, NgZorroAntdModule, DirectiveModule],
})
export class SharedModule {}

