import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, Http } from '@angular/http';

// 国际化
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// 公共服务
import { SharedService } from './shared.service';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forChild()
  ],
  exports: [TranslateModule],
  providers: [SharedService],
  declarations: []
})
export class SharedModule {}

