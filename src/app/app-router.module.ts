import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path: 'test', component: TestComponent},
  { path: '**', component: TestComponent },
  { path: '',   redirectTo: '/test', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})
export class AppRouterModule { }