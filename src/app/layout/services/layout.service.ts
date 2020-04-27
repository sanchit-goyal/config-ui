import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Event, NavigationEnd, Router} from '@angular/router';
import {SideNavigation, TopNavigation} from '../../../_models/layout';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

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

  public getSideNavigationBarItems(): SideNavigation[] {
    return Navigations.sideNavigationBar;
  }

  public getTopNavigationBatItems(): TopNavigation[] {
    return Navigations.topNavigationBar;
  }
}

class Navigations {

  static header = 'Tortoise Analytics';

  static sideNavigationBar: SideNavigation[] = [
    {
      displayName: 'Java',
      iconName: 'java',
      route: 'Java',
      children: [
        {
          displayName: 'versions',
          iconName: '',
          route: 'java/version',
          children: [
            {
              displayName: 'Java 14',
              iconName: '',
              route: 'java/version/java14',
            },
            {
              displayName: 'Java 13',
              iconName: '',
              route: 'java/version/java13',
            }
          ],
        },
        {
          displayName: 'Spring Boot',
          iconName: '',
          route: 'java/springBoot',
          children: [
            {
              displayName: 'getting started',
              iconName: '',
              route: 'java/springBoot/gettingStarted'
            }
          ],
        },
      ]
    },
    {
      displayName: 'Python',
      disabled: true,
      iconName: '',
      route: 'Python',
      children: [
        {
          displayName: 'Django',
          iconName: '',
          route: 'python/django',
        },
        {
          displayName: 'Flask',
          iconName: '',
          route: 'python/flask'
        },
      ],
    },
    {
      displayName: 'JavaScript',
      disabled: true,
      iconName: 'js',
      route: 'JavaScript',
    },
    {
      displayName: 'Machine Learning',
      iconName: '',
      route: 'MachineLearning',
      children: [
        {
          displayName: 'Supervised Learning',
          iconName: '',
          route: 'MachineLearning/SupervisedLearning',
        },
        {
          displayName: 'Unsupervised Learning',
          iconName: '',
          route: 'machineLearning/UnsupervisedLearning',
        },
        {
          displayName: 'Reinforcement Learning',
          iconName: '',
          route: 'machineLearning/ReinforcementLearning',
        },
      ]
    }
  ];

  static topNavigationBar: TopNavigation[] = [
    {
      name: 'about1',
      route: 'about',
    }, {
      name: 'about2',
      route: 'about',
    }
  ];

}
