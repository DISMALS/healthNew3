import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, Http } from '@angular/http';

// 国际化
import { TranslateModule } from 'ng2-translate';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  declarations: []
})
export class AppCommonModule { }
