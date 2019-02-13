import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const FIREBASE = 'AIzaSyA0WfrLuJOloZXTPljJdExdMcRYZJoYqTA';

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private http: HttpClient) {}
  
  signUp(email: string, password: string) {

    this.http.post(
      `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${FIREBASE}`,
      { email: email, 
        password: password, 
        returnSecureToken: true}
    ).subscribe(resData => {
        console.log('*****' + resData);
      });
  }

  login(email: string, password: string) {
    // this.user.email = email;
    // this.user.password = password;
  }
}