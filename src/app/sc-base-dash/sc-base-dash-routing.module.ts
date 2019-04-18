import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScBaseDashComponent } from './sc-base-dash.component';

const routes: Routes = [
  { path: '', component: ScBaseDashComponent,  children: [
    // { path: 'test', component: MasterDataComponent }
]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScBaseDashRoutingModule { }
