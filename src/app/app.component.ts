import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {IconRegistryService} from './layout/services/icon-registry.service';
import {Layout} from '../_models/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'config-ui';
  // defining default layout
  layout: Layout = {navBar: true, footer: true,};

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private iconRegistryService: IconRegistryService) {
    this.iconRegistryService.registerIcons();
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && this.activatedRoute.firstChild.snapshot.data.layout) {
        this.layout = this.activatedRoute.firstChild.snapshot.data.layout;
      }
    });
  }
}
