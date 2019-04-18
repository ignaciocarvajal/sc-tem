import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './sc-base-dash/sc-base-dash.module#ScBaseDashModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
