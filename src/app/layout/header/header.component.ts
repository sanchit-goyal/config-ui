import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {VERSION} from '@angular/material/core';
import {LayoutService} from '../services/layout.service';
import {NavItem} from '../../../_models/layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('appDrawer') appDrawer: ElementRef;
  version = VERSION;
  navItems: NavItem[];


  constructor(private layoutService: LayoutService) {
    this.navItems = this.layoutService.getNavItems();
  }

  ngOnInit(): void {
  }

}
