import { Component, OnInit } from '@angular/core';
// 公共服务
import { SharedService } from '../common/shared.service';

// 服务
import { KnowledgeService } from './knowledge.service';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.scss']
})
export class KnowledgeComponent implements OnInit {

  constructor(public translate: SharedService, public knowledgeService: KnowledgeService) {
  }
  ngOnInit() {
  }

  loginAppliction() {
    const userInfo = {
      orgId: 3,
      password: '123456',
      practiceId: 17,
      userName: 'xiaoyu'
    };
    this.knowledgeService.getUserInfo(userInfo).subscribe(data => {
      console.log(data);
    });
  }

}
