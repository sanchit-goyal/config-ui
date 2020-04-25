import {Component, OnInit} from '@angular/core';
import {IconRegistryService} from './services/icon-registry.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private iconRegistry: IconRegistryService) {
    iconRegistry.registerIcons();
  }

  ngOnInit(): void {
  }

}
