import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import {PanelMenuModule} from 'primeng/panelmenu';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [SidebarComponent],
  imports: [
    DropdownModule,
    PanelMenuModule,
    FormsModule
  ],
  exports: [SidebarComponent]
})
export class ScCommonvfModule { }
