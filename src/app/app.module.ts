import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RedditComponent } from './reddit/reddit.component';
import { GithubComponent } from './github/github.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    RedditComponent,
    GithubComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
