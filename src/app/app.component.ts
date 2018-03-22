import { Component } from '@angular/core';

// 国际化
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public translate: TranslateService) {
    // set i18n begin
    translate.addLangs(['zh', 'en']);
    translate.setDefaultLang('zh');
    const browserLang = translate.getBrowserLang();
    console.log(browserLang);
    translate.use(browserLang.match(/zh|en/) ? browserLang : 'zh');
    // set i18n end
  }
}
