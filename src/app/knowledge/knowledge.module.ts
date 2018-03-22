import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// 全局公共模块
import { AppCommonModule } from '../common/common.module';
// 组件
import { KnowledgeComponent } from './knowledge.component';
import { KnowledgeListComponent } from './knowledge-list/knowledge-list.component';

// 路由
import { KnowledgeRoutingModule } from './knowledge-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppCommonModule,
    KnowledgeRoutingModule
  ],
  declarations: [KnowledgeComponent, KnowledgeListComponent]
})
export class KnowledgeModule { }
