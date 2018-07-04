import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Observable } from 'rxjs/observable';

@Injectable()
export class AfService {
//
  constructor(public af : AfService) { }

  loginWithGoogle(){
    this.af.auth.login({
      provider: AuthProviders.Google,
      method : AuthMethod.Popup
    });
  }
  logout(){
    return this.af.auth();