import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// 组件
import { OperationComponent } from './operation.component';
import { OperationListComponent } from './operation-list/operation-list.component';

// 路由
import { OperationRoutingModule } from './operation-routing.module';

@NgModule({
  imports: [
    CommonModule,
    OperationRoutingModule
  ],
  declarations: [OperationComponent, OperationListComponent]
})
export class OperationModule { }
