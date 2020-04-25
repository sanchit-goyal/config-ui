import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MenuListItemComponent} from './menu-list-item/menu-list-item.component';


@NgModule({
  declarations: [HomeComponent, NavBarComponent, MenuListItemComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
  ],
  providers: []
})
export class HomeModule {
}
