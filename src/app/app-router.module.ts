import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { SettingsComponent } from './settings/settings.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path: 'test', component: TestComponent},
  {path: 'settings', component: SettingsComponent},
  { path: '',   redirectTo: '/test', pathMatch: 'full' },
  {path: '**', component: TestComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})
export class AppRouterModule { }
