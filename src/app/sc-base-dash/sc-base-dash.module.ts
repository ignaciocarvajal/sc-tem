import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScBaseDashRoutingModule } from './sc-base-dash-routing.module';
import { ScBaseDashComponent } from './sc-base-dash.component';

// libs
import { ScCommonvfModule } from '@sc/commonvf';

@NgModule({
  declarations: [ScBaseDashComponent],
  imports: [
    CommonModule,
    ScBaseDashRoutingModule,
    ScCommonvfModule
  ]
})
export class ScBaseDashModule { }
