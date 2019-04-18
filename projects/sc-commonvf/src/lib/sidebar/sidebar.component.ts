import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'sc-commonvf-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  items: MenuItem[];

  constructor() {}

  ngOnInit() {
    this.items = [
      {
        label: 'Smart City',
        icon: 'pi pi-pw pi-file',
        items: [
          {
            label: 'Home',
            icon: 'pi pi-fw pi-plus',
            routerLink: ['Home']
          }
        ]
      },
      {
        label: 'master Data',
        icon: 'pi pi-pw pi-file',
        items: [
          {
            label: 'Master Data list',
            icon: 'pi pi-fw pi-plus',
            routerLink: ['MasterData']
          }
        ]
      }
    ];
  }
}
