import { Component } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  constructor(private auth: FirebaseService) { }
  login() {
    if (this.email == '') {
      alert('please enter email id');
      return;
    }
    if (this.password == '') {
      alert('pleaase enter password');
      return;
    }
    this.auth.login(this.email, this.password);
    this.email = '';
    this.password = '';

  }
}
