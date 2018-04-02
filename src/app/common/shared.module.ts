import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// 国际化
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// 公共服务
import { SharedService } from './shared.service';

// 功能插件
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { SortableModule } from '@progress/kendo-angular-sortable';

// 全局指令模块
import { DirectiveModule } from '../common/directive/directive.module';
import { MainLeftMenuComponent } from './components/main-left-menu/main-left-menu.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    NgZorroAntdModule,
    DirectiveModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  declarations: [MainLeftMenuComponent],
  exports: [TranslateModule, NgZorroAntdModule, DirectiveModule, SortableModule, FormsModule, ReactiveFormsModule, MainLeftMenuComponent],
})
export class SharedModule {}

