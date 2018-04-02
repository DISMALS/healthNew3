import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// 公共服务
import { SharedService } from '../common/shared.service';

import { AuthorizeService } from './authorize.service';

@Component({
  selector: 'app-authorize',
  templateUrl: './authorize.component.html',
  styleUrls: ['./authorize.component.scss']
})
export class AuthorizeComponent implements OnInit {
  public newPermission = 'FUN_PROVIDER_ENCOUNTER_CM';
  constructor(public translate: SharedService, public authorize: AuthorizeService, public router: Router) { }

  ngOnInit() {
  }

  loginAppliction() {
    const userInfo = {
      orgId: 3,
      password: '123456',
      practiceId: 17,
      userName: 'xiaoyu'
    };
    this.authorize.getUserInfo(userInfo).subscribe((data: any) => {
      console.log(data);
      window.lkHealth = data.values;
      window.sessionStorage.setItem('userInfo', JSON.stringify(data.values));
      this.router.navigate(['main']);
    });
  }

}
