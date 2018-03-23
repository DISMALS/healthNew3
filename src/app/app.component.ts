import { Component } from '@angular/core';

// 公共服务
import { SharedService } from './common/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public translate: SharedService) {
  }

  changeLang() {
    let lang: string;
    const localLang = window.localStorage.getItem('lang');
    if (localLang === 'zh') {
      lang = 'en';
    }else {
      lang = 'zh';
    }
    this.translate.setLang(lang);
  }
}
