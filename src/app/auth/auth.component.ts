import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { User } from '../shared/user/user.model';
import { UserService } from '~/app/shared/user/user.service';
import { AuthService } from './auth.service';
@Component({
  selector: 'ns-auth',
  providers: [UserService, AuthService],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  moduleId: module.id,
})
export class AuthComponent implements OnInit {
  user: User;
  isLoggingIn = true;
  isLoading = true;
  
  constructor(
    private router: RouterExtensions, 
    private authService: AuthService) 
    { 
      this.user = new User();
    }

  ngOnInit() {
  }

  submit() {
    if(this.isLoggingIn) {
      this.login();
    } else {
      this.signUp();
    }
  }

  login() {
    this.authService.loginUser(this.user.email, this.user.password).subscribe(resData => {
      this.isLoading = false;
      this.router.navigate(['/clients'], {clearHistory: true});
    },
    err => {
      console.log(err);
      this.isLoading = false;
    });
  }

  signUp() {
    this.authService.registerNewUser(this.user.email, this.user.password).subscribe(resData => {
      this.isLoading = false;
      this.router.navigate(['/client-list'], {clearHistory: true});
    });
  }
 
  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }

}
