import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { alert } from 'tns-core-modules/ui/dialogs';

const FIREBASE = 'AIzaSyA0WfrLuJOloZXTPljJdExdMcRYZJoYqTA';

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private http: HttpClient) {}
  
  registerNewUser(email: string, password: string) {
    return this.http.post(
      `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${FIREBASE}`,
      { email: email, password: password, returnSecureToken: true }
    ).pipe(catchError(errorRes => {
        this.handleError(errorRes.error.error.message);
        return throwError(errorRes);
    }));
  }

  loginUser(email: string, password: string) {
    return this.http.post(
      `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${FIREBASE}`,
      {email: email, password: password, returnSecureToken: true }
    ).pipe(catchError(errorRes => {
      this.handleError(errorRes.error.error.message);
      return throwError(errorRes);
    }));
  }

  private handleError(errorMessage: string) {
    switch (errorMessage) {
      case 'EMAIL_EXISTS':
        alert('This email address exists already!');
        break;
      case 'INVALID_PASSWORD':
        alert('Your password is invalid!');
        break;
      default:
        alert('Authentication failed, check your credentials.')
    }
  }

}