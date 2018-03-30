import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit, AfterViewInit {
  public isActive: Boolean = false;
  public count: number = 0;
  @ViewChild('informationMain') informationMain: ElementRef;
  constructor() { }

  ngOnInit() {
  }
  
  ngAfterViewInit() {
    console.log('执行了');
  }

  // 下拉菜单显示状态
  isShow(e, informationMain) {
    this.isActive = !this.isActive;
    if(this.isActive){
      const winWidth = window.innerHeight;
      const informationDom = this.informationMain.nativeElement;
      this.informationMain.nativeElement.style.height = `${winWidth - 48}px`;
    }else{
      this.informationMain.nativeElement.style.height = `0px`;
    }
  }

  //清空所有消息
  clear() {
    console.log('清空所有消息');
  }
}
