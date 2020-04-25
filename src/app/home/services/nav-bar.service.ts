import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Event, NavigationEnd, Router} from '@angular/router';
import {NavItem} from '../../../_models/navItems';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {

  public appDrawer: any;
  public currentUrl = new BehaviorSubject<string>(undefined);

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl.next(event.urlAfterRedirects);
      }
    });
  }

  public closeNav() {
    this.appDrawer.close();
  }

  public openNav() {
    this.appDrawer.open();
  }

  public getNavItems(): NavItem[] {
    return Test.navItems;
  }
}

class Test {
  static navItems: NavItem[] = [
    {
      displayName: 'About',
      iconName: 'myself',
      route: 'about',
      children: [
        {
          displayName: '10<sup>Th</sup>',
          iconName: 'school',
          route: 'about/tenth',
        },
        {
          displayName: '12<sup>Th</sup>',
          iconName: 'school',
          route: 'about/twelfth',
        },
        {
          displayName: 'Graduation',
          iconName: 'college',
          route: 'about/graduations'
        }
      ]
    },
    {
      displayName: 'ConfigTool',
      disabled: false,
      iconName: 'custom_fingerprint',
      route: '',
    },
    {
      displayName: 'Outbound',
      disabled: true,
      iconName: 'people',
      route: '',
    },
    {
      displayName: 'feedProcessor',
      iconName: '',
      children: [
        {
          displayName: 'Reprocess',
          iconName: '',
          route: '',
        },
        {
          displayName: 'Show Status',
          iconName: '',
          route: '',
        },
      ]
    }
  ];

}
