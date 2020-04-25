import {Component, OnInit} from '@angular/core';
import {Roles, User} from '../../_models/user';
import {Constants} from '../../_models/constants';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    localStorage.setItem(Constants.USER, JSON.stringify(this.getUser()));
    this.router.navigate(['/about']);
  }

  getUser(): User {
    return new User({
      id: 123,
      userName: 'user',
      roles: [Roles.ADMIN],
    });

  }

}
