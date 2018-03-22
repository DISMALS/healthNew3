import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// 组件
import { BillingComponent } from './billing.component';
import { BillingListComponent } from './billing-list/billing-list.component';

// 路由
import { BillingRoutingModule } from './billing-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BillingRoutingModule
  ],
  declarations: [BillingComponent, BillingListComponent]
})
export class BillingModule { }
