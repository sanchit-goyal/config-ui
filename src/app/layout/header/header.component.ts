import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {VERSION} from '@angular/material/core';
import {LayoutService} from '../services/layout.service';
import {SideNavigation, TopNavigation} from '../../../_models/layout';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {

  @Input() sideBar: boolean;
  @ViewChild('appDrawer') appDrawer: MatSidenav;
  version = VERSION;
  topNavItems: TopNavigation[];
  sideNavItems: SideNavigation[];

  constructor(private layoutService: LayoutService) {
    this.sideNavItems = this.layoutService.getSideNavigationBarItems();
    this.topNavItems = this.layoutService.getTopNavigationBatItems();
  }

  ngAfterViewInit(): void {
    if (this.sideBar) {
      this.layoutService.appDrawer = this.appDrawer;
    }
  }

}
