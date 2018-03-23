import { Injectable, OnInit } from '@angular/core';

// 国际化
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class SharedService {
  LocalLang: string;
  constructor(public translate: TranslateService ) {
    translate.addLangs(['zh', 'en']);
    translate.setDefaultLang('zh');
    if (!window.localStorage.getItem('lang')) {
      window.localStorage.setItem('lang', 'zh');
    }
    this.LocalLang = window.localStorage.getItem('lang') || 'zh';
    translate.use(this.LocalLang);
  }
  getLang() {
    return window.localStorage.getItem('lang') || 'zh';
  }
  setLang(lang) {
    window.localStorage.setItem('lang', lang);
    this.translate.use(lang);
  }
}
