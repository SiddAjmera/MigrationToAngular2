import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { Routes, RouterModule, UrlHandlingStrategy, UrlTree } from '@angular/router';
import { AppComponent } from './app.component'
import { ChildComponent } from './child.component'

import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from '@angular/common'

export class Ng1Ng2UrlHandlingStrategy implements UrlHandlingStrategy {
  shouldProcessUrl(url: UrlTree) {
    //this tells that only '/' and  '/child' routes will be handled by Angular. rest AngularJS will handle /phones routes as defined in its config
    return url.toString() === '/' || url.toString() === '/child';
  }
  extract(url: UrlTree) { return url; }
  merge(url: UrlTree, whole: UrlTree) { return url; }
}

@NgModule({
    imports: [
        BrowserModule,
        UpgradeModule,
        RouterModule.forRoot([
             { path: '', redirectTo: 'child', pathMatch: 'full' },
            { path: 'child', component: ChildComponent }
        ])
    ],
    providers: [
        {provide: APP_BASE_HREF, useValue: '!'},
        // use hash location strategy
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        // use custom url handling strategy
        { provide: UrlHandlingStrategy, useClass: Ng1Ng2UrlHandlingStrategy }
        
    ],
    declarations: [
        AppComponent,
        ChildComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    ngDoBootstrap() { }
}

