import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { alert, prompt } from "tns-core-modules/ui/dialogs";

import { User } from '../shared/user/user.model';
import { AuthService } from './auth.service';

@Component({
  selector: 'ns-auth',
  providers: [AuthService],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  moduleId: module.id,
})
export class AuthComponent {
  isLoggingIn = true;
  user: User;
  processing = false;
  @ViewChild("password") password: ElementRef;
  @ViewChild("confirmPassword") confirmPassword: ElementRef;
  
  constructor(private router: RouterExtensions, private authService: AuthService) { 
      this.user = new User();
      this.user.email = "wil@us.gov";
      this.user.password = "aaaaaa";
  }

  toggleForm() {
    this.isLoggingIn = !this.isLoggingIn;
  }


  submit() {
    if (!this.user.email || !this.user.password) {
      this.alert("Please provide both an email address and password.");
      return;
    }
    
    this.processing = true;
    if (this.isLoggingIn) {
        this.login();
    } else {
      this.signUp();
    }
  }

  login() {
    this.authService.loginUser(this.user.email, this.user.password).subscribe(resData => {
      this.processing = false;
      this.router.navigate(['/clients'], {clearHistory: true});
    });
  }
  

  signUp() {
    if (this.user.password != this.user.confirmPassword) {
      this.alert("Your passwords do not match.");
      return;
    }
    this.authService.registerNewUser(this.user.email, this.user.password).subscribe(resData => {
      this.processing = false;
      this.alert("Your account was successfully created");
      this.isLoggingIn = true;
    });
  }
 
  focusPassword() {
    this.password.nativeElement.focus();
  }

  focusConfirmPassword() {
    if (!this.isLoggingIn) {
      this.confirmPassword.nativeElement.focus();
    }
  }

  alert(message: string) {
    return alert({
        title: "Client Stack",
        okButtonText: "OK",
        message: message
    });
  }

}
