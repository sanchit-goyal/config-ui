import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {NavItem} from '../../../_models/navItems';
import {VERSION} from '@angular/material/core';
import {NavBarService} from '../services/nav-bar.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements AfterViewInit {

  @ViewChild('appDrawer') appDrawer: ElementRef;
  version = VERSION;
  navItems: NavItem[];

  constructor(private navBarService: NavBarService) {
    this.navItems = navBarService.getNavItems();
  }

  ngAfterViewInit(): void {
    this.navBarService.appDrawer = this.appDrawer;
  }

}
