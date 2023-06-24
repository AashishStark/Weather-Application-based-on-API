import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, Auth } from '@angular/fire/auth';
import { from } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  isLoggedIn = false;

  constructor(public fireauth: AngularFireAuth,private router:Router) { }

  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then(() => {

      localStorage.setItem('token', 'true');
      this.router.navigate(['/today']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/login']);
    })
  }


  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(() => {
      alert("Registration Successful");
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/register']);
    })
  }



  logout() {
    this.fireauth.signOut().then(() => {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
    })
  }
  /*
  signin(email: string, password: string) {
    return from(signInWithEmailAndPassword(this.firebaseAuth, email, password));
     /* .then(res => {
        this.isLoggedIn = true;
        console.log("Hiii");
        localStorage.setItem('user',JSON.stringify(res.user))

      })
      .catch(err => { console.log(err); })
  }
  
  async signup(email: string, password: string) {
    return from(createUserWithEmailAndPassword(this.firebaseAuth, email, password));
     /*await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
       .then(res => {
         window.alert("Succesfully signed");
        this.isLoggedIn = true;
        localStorage.setItem('user', JSON.stringify(res.user));
       })
       .catch(err => { window.alert("Error as "+err); console.log(err); })
  }
  logout() {
    this.firebaseAuth.signOut()
    localStorage.removeItem('user')
  }*/
}
