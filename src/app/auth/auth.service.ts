import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const FIREBASE = 'AIzaSyA0WfrLuJOloZXTPljJdExdMcRYZJoYqTA';

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private http: HttpClient) {}
  
  registerNewUser(email: string, password: string) {
    return this.http.post(
      `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${FIREBASE}`,
      { email: email, password: password, returnSecureToken: true }
    )
  }

  loginUser(email: string, password: string) {
    return this.http.post(
      `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${FIREBASE}`,
      {email: email, password: password, returnSecureToken: true }
    )
  }

}