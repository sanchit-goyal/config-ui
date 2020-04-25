import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {VERSION} from '@angular/material/core';
import {LayoutService} from '../services/layout.service';
import {NavItem} from '../../../_models/layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {

  @ViewChild('appDrawer') appDrawer: ElementRef;
  version = VERSION;
  navItems: NavItem[];

  constructor(private layoutService: LayoutService) {
    this.navItems = this.layoutService.getNavItems();
  }

  ngAfterViewInit(): void {
    this.layoutService.appDrawer = this.appDrawer;
  }

}
