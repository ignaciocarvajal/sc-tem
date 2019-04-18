import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '',  pathMatch: 'full', redirectTo: '/dashboard' },
  { path: 'dashboard',  pathMatch: 'full', loadChildren: './sc-base-dash/sc-base-dash.module#ScBaseDashModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
