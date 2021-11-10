import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { User } from '../interface/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public angularFireAuth: AngularFireAuth,
    private router: Router,
    private ngZone: NgZone,
    private userService: UserService
  ) { }


  register(user: User, password: string) {
    const { correo } = user;
    return new Promise((resolve, reject) => {
      this.angularFireAuth.createUserWithEmailAndPassword(correo, password).then(result => {
        console.log(result)
        result.user?.sendEmailVerification().then(() => {
          this.userService.createUser(user);
          resolve(result.user)
          this.router.navigate(['login'])
        });
      }).catch(err => {
        reject(err.message)
      })
    })
  }

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.angularFireAuth.signInWithEmailAndPassword(email, password).then(result => {
        this.ngZone.run(() => {
          this.router.navigate(['paginaprincipal'])
          resolve(result.user);
        })
      }).catch(err => {
        reject(err.message)
      })
    })
  }




}
