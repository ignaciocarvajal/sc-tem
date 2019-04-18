import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterDataComponent } from './master-data.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: MasterDataComponent},
];
@NgModule({
  declarations: [MasterDataComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],

})
export class MasterDataModule { }
