import { Component } from '@angular/core';
import * as $ from '../../node_modules/jquery/dist/jquery.min.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  test() {
    console.log($('.container'));
  }
}
