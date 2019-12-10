import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from './service/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLogin: boolean;
  title = 'login-angular';

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  }
}
