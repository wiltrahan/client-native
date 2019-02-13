import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { User } from '../shared/user/user.model';
import { UserService } from '~/app/shared/user/user.service';
@Component({
  selector: 'ns-auth',
  providers: [UserService],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  moduleId: module.id,
})
export class AuthComponent implements OnInit {
  // email = 'wiltrahan@us.gov';
  user: User;
  isLoggingIn = true;
  
  constructor(private router: RouterExtensions, private userService: UserService) { 
    this.user = new User();
  }

  ngOnInit() {
  }

  // onSignin() {
  //   this.router.navigate(['/client-list'], {clearHistory: true});
  // }

  submit() {
    if(this.isLoggingIn) {
      this.login();
    } else {
      this.signUp();
    }
  }

  login() {

  }

  signUp() {
    this.userService.register(this.user);
  }
 
  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }

}
