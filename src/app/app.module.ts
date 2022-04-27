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
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HeaderComponent,
    TestResultsComponent,
    SettingsComponent,
    AboutComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
