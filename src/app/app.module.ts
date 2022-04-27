import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HeaderComponent } from './header/header.component';
import { AppRouterModule } from './app-router.module';
import { TestResultsComponent } from './test-results/test-results.component';
import { SettingsComponent } from './settings/settings.component';
import { AboutComponent } from './about/about.component';
import {HttpClientModule} from '@angular/common/http';
import { User } from './user';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HeaderComponent,
    TestResultsComponent,
    SettingsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
