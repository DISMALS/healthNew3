import { Component, OnInit } from '@angular/core';
// 公共服务
import { SharedService } from '../common/shared.service';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.scss']
})
export class KnowledgeComponent implements OnInit {

  constructor(public translate: SharedService) {
  }
  ngOnInit() {
  }

}
