import { Component, OnInit } from '@angular/core';
// 国际化
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.scss']
})
export class KnowledgeComponent implements OnInit {

  constructor(public translate: TranslateService) { 
    // set i18n begin
    translate.addLangs(['zh', 'en']);
    translate.setDefaultLang('zh');
    const browserLang = translate.getBrowserLang();
    console.log(browserLang);
    translate.use(browserLang.match(/zh|en/) ? browserLang : 'zh');
    // set i18n end
  }
  
  

  ngOnInit() {
  }

}
