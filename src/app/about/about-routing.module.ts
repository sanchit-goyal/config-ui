import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TenthComponent} from './tenth/tenth.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tenth'
  },
  {
    path: 'tenth',
    component: TenthComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule {
}
