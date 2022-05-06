import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { AboutComponent } from './about/about.component';
import { SettingsComponent } from './settings/settings.component';
import { TestResultsComponent } from './test-results/test-results.component';
import { TestComponent } from './test/test.component';
import { ProfileComponent } from './profile/profile.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/test', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'test', component: TestComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'results', component: TestResultsComponent },
  { path: 'profile', component: ProfileComponent},
  { path: 'leaderboard', component: LeaderboardComponent},
  { path: '**', component: TestComponent }
  
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRouterModule { }
