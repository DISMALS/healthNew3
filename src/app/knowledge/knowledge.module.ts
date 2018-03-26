import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// 全局公共模块
import { SharedModule } from '../common/shared.module';

// 组件
import { KnowledgeComponent } from './knowledge.component';
import { KnowledgeListComponent } from './knowledge-list/knowledge-list.component';

// 路由
import { KnowledgeRoutingModule } from './knowledge-routing.module';

// 服务
import { KnowledgeService } from './knowledge.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    KnowledgeRoutingModule
  ],
  declarations: [KnowledgeComponent, KnowledgeListComponent],
  providers: [KnowledgeService]
})
export class KnowledgeModule { }
