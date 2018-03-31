import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit, AfterViewInit {
  public isActive: Boolean = false;
  public count = 0;
  public informationList: Array<Information> = [];
  public sysList: Array<Information> = [];
  public bussinessList: Array<Information> = [];
  public wariningList: Array<Information> = [];
  @ViewChild('informationMain') informationMain: ElementRef;
  constructor() { }

  ngOnInit() {
    this.informationList = [
      new Information(1, 1, '这是消息内容', 343423),
      new Information(2, 2, '这是消息内容', 45243),
      new Information(3, 3, '这是消息内容', 23423),
      new Information(4, 1, '这是消息内容', 242353),
      new Information(5, 2, '这是消息内容', 2343241),
      new Information(6, 2, '这是消息内容', 12234),
      new Information(7, 1, '这是消息内容', 673123243),
      new Information(8, 3, '这是消息内容', 457623),
      new Information(9, 3, '这是消息内容', 76334),
    ];
    this.informationList.forEach(item => {
      if (item.type === 1) {
        this.sysList.push(item);
      }
      if (item.type === 2) {
        this.bussinessList.push(item);
      }
      if (item.type === 3) {
        this.wariningList.push(item);
      }
    });
    this.count = this.informationList.length;
  }
  ngAfterViewInit() {
    console.log('执行了');
  }

  // 下拉菜单显示状态
  isShow(e, informationMain) {
    this.isActive = e;
    setTimeout(() => {
      if (this.isActive) {
        const winWidth = window.innerHeight;
        const informationDom = this.informationMain.nativeElement;
        this.informationMain.nativeElement.style.height = `${winWidth - 48}px`;
      }else {
        this.informationMain.nativeElement.style.height = `0px`;
      }
    }, 200);
  }

  // 清空所有消息
  clear() {
    console.log('清空所有消息');
  }
}
export class Information {
  constructor(
    public id: number,
    public type: number,
    public content: string,
    public date: number
  ) {}
}
