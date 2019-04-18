import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScBaseDashComponent } from './sc-base-dash.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard'},
  { path: 'dashboard', component: ScBaseDashComponent,  children: [
    {
      path: 'Home',
      loadChildren: './modules/home/home.module#HomeModule'
    },
    {
      path: 'MasterData',
      loadChildren: './modules/master-data/master-data.module#MasterDataModule'
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScBaseDashRoutingModule { }
