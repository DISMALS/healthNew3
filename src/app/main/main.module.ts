import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// 路由
import { MainRoutingModule } from './main-routing.module';

// 组件
import { MainComponent } from './main.component';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  declarations: [
    MainComponent
  ]
})
export class MainModule { }
