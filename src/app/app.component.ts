import { Component } from '@angular/core';
import { FirebaseService } from './services/firebase.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-appli';
  isSignedIn = false;
  /*constructor(public firebaseService: FirebaseService) { }
  ngOnInit() {
    if (localStorage.getItem('user') !== null)
      this.isSignedIn = true
    else
      this.isSignedIn = false
  }
  async onSignup(email: string, password: string) {
    await this.firebaseService.signup(email, password);
    if (this.firebaseService.isLoggedIn)
      alert('Sign-uped Succesfully!!!!!!!!!')
  }
  async onSignin(email: string, password: string) {
    await this.firebaseService.signin(email, password);
    if (this.firebaseService.isLoggedIn)
      this.isSignedIn = true
  }*/
  handleLogout() {
    this.isSignedIn=false
  }
}
