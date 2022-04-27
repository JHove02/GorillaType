import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HeaderComponent } from './header/header.component';
import { AppRouterModule } from './app-router.module';
<<<<<<< HEAD
import { TestResultsComponent } from './test-results/test-results.component';
=======
import { SettingsComponent } from './settings/settings.component';
>>>>>>> 8f1e9bb9bc7292c1fe430a02178f1429535ac323

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HeaderComponent,
<<<<<<< HEAD
    TestResultsComponent
=======
    SettingsComponent
>>>>>>> 8f1e9bb9bc7292c1fe430a02178f1429535ac323
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
