import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'my-app',
  template: `
    <a routerLink="/phones">AngularJS route</a>
    <a routerLink="/new">Angular 2 route</a>
    <router-outlet></router-outlet>
    <div class="view-container">
      <div ng-view class="view-frame"></div>
    </div>
  `
})

export class AppComponent {}